"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { CDN_URL, debounce } from "@/utils";
import styles from "@/styles/can-3d.module.scss";

export default function Can3D() {
  useEffect(() => {
    const container = document.getElementById("can-3d");
    const canvas = document.getElementById("can-3d-canvas");

    if (!container) {
      return;
    }

    var renderer;
    var scene;
    var camera;
    var controls;

    renderer = setupRenderer(container, canvas);
    scene = setupScene(renderer);
    camera = setupCamera(container);
    controls = addControls(renderer, camera);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    loadModel(renderer, scene, animate);

    const onResize = () => {
      if (!container || !canvas) {
        return;
      }

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const debouncedOnResize = debounce(onResize, 200);

    window.addEventListener("resize", debouncedOnResize);

    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, []);

  return (
    <div id="can-3d" className={styles["can-3d"]}>
      <canvas id="can-3d-canvas" />
    </div>
  );
}

function setupRenderer(container, canvas) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas,
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  return renderer;
}

function addControls(renderer, camera) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.005;

  return controls;
}

function setupCamera(container) {
  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  return camera;
}

function setupScene(renderer) {
  const scene = new THREE.Scene();
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  scene.environment = pmremGenerator.fromScene(
    new RoomEnvironment(),
    0.04
  ).texture;

  return scene;
}

function loadModel(renderer, scene, animate) {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(`${CDN_URL}/3d/texture-2.png`);

  new GLTFLoader().load(
    "/3d/can.glb",
    (gltf) => {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          node.material.roughness = 0.1;
          node.material.metalness = 0.75;
          node.material.needsUpdate = true;
        }

        if (node.name === "Cylinder001_1") {
          node.material.map = texture;
        }
      });

      const model = gltf.scene;
      scene.add(model);

      renderer.setAnimationLoop(animate);
    },
    undefined,
    (error) => {
      console.error(error);
    }
  );
}
