"use client";
import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { CDN_URL, isVerySmallScreen } from "@/utils";
import styles from "@/styles/can-3d.module.scss";

const CAMERA_CONFIG = {
  fov: 60,
  near: 0.1,
  far: 1000,
  position: { z: 5 },
};

const MATERIAL_CONFIG = {
  roughness: 0.1,
  metalness: 0.75,
};

const CONTROLS_CONFIG = {
  enablePan: false,
  enableDamping: true,
  enableZoom: false,
  autoRotate: true,
  autoRotateSpeed: 0.1,
};

export default function Can3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrame = useRef(null);

  const setupRenderer = useCallback((container, canvas) => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    return renderer;
  }, []);

  const setupScene = useCallback((renderer) => {
    const scene = new THREE.Scene();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    return scene;
  }, []);

  const setupCamera = useCallback((container) => {
    const camera = new THREE.PerspectiveCamera(
      CAMERA_CONFIG.fov,
      container.clientWidth / container.clientHeight,
      CAMERA_CONFIG.near,
      CAMERA_CONFIG.far
    );

    camera.position.set(0, 0, CAMERA_CONFIG.position.z);

    return camera;
  }, []);

  const setupControls = useCallback((camera, domElement) => {
    const controls = new OrbitControls(camera, domElement);
    Object.assign(controls, CONTROLS_CONFIG);
    controls.target.set(0, 0, 0);
    controls.update();
    return controls;
  }, []);

  const loadModel = useCallback(async (scene, onLoad) => {
    const textureLoader = new THREE.TextureLoader();
    const gltfLoader = new GLTFLoader();

    const texture = await textureLoader.loadAsync(
      `${CDN_URL}/3d/texture-3.png`
    );

    gltfLoader.load(`${CDN_URL}/3d/can.glb`, (gltf) => {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          node.material.roughness = MATERIAL_CONFIG.roughness;
          node.material.metalness = MATERIAL_CONFIG.metalness;
          node.material.needsUpdate = true;
          node.castShadow = true;
          node.receiveShadow = true;
        }

        if (node.name === "Cylinder001_1") {
          node.material.map = texture;
        }
      });

      if (isVerySmallScreen()) {
        gltf.scene.scale.set(0.9, 0.9, 0.9);
      }

      scene.add(gltf.scene);
      onLoad();
    });
  }, []);

  const animate = useCallback(() => {
    if (
      !controlsRef.current ||
      !rendererRef.current ||
      !sceneRef.current ||
      !cameraRef.current
    ) {
      return;
    }

    controlsRef.current.update();
    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  const handleResize = useCallback(() => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) {
      return;
    }

    const container = containerRef.current;
    cameraRef.current.aspect = container.clientWidth / container.clientHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(container.clientWidth, container.clientHeight);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return;
    }

    rendererRef.current = setupRenderer(container, canvas);
    sceneRef.current = setupScene(rendererRef.current);
    cameraRef.current = setupCamera(container);
    controlsRef.current = setupControls(
      cameraRef.current,
      rendererRef.current.domElement
    );

    animationFrame.current = requestAnimationFrame(animate);

    loadModel(sceneRef.current, () => {
      animate();
    });

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      resizeObserver.disconnect();
      rendererRef.current?.dispose();
      controlsRef.current?.dispose();
    };
  }, [
    setupRenderer,
    setupScene,
    setupCamera,
    setupControls,
    loadModel,
    animate,
    handleResize,
  ]);

  return (
    <>
      <div ref={containerRef} className={styles["can-3d"]}>
        <canvas ref={canvasRef} />
      </div>
      <div className={styles["can-background"]}>
        <video className={styles.background} autoPlay playsInline muted loop>
          <source src={"/videos/can-bg.mp4"} type="video/webm" />
        </video>
      </div>
    </>
  );
}
