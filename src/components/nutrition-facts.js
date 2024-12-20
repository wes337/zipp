"use client";

import { ErrorBoundary } from "react-error-boundary";
import { IconX } from "@tabler/icons-react";
import { useNutritionFacts } from "@/lib/state";
import { CDN_URL } from "@/utils";
import NutritionFacts3D from "@/components/nutrition-facts-3d";
import styles from "@/styles/nutrition-facts.module.scss";

export default function NutritionFacts() {
  const { hide } = useNutritionFacts();

  return (
    <>
      <div className={styles["nutrition-facts"]}>
        <button className={styles.close} onClick={() => hide()}>
          <IconX size={40} stroke={4} />
        </button>
        <ErrorBoundary fallback={<NutritionFactsImage />}>
          <NutritionFacts3D />
        </ErrorBoundary>
      </div>
      <video
        className={styles.background}
        autoPlay={true}
        playsInline={true}
        muted={true}
        controls={false}
        loop={true}
      >
        <source src={`${CDN_URL}/videos/can-bg.mp4`} type="video/webm" />
      </video>
    </>
  );
}

function NutritionFactsImage() {
  return (
    <div className={styles.img}>
      <img src={`${CDN_URL}/images/nutritional-facts.png`} alt="" />
    </div>
  );
}
