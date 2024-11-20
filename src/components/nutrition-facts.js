"use client";

import { ErrorBoundary } from "react-error-boundary";
import { IconX } from "@tabler/icons-react";
import { useNutritionFacts } from "@/lib/state";
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
      <video className={styles.background} autoPlay playsInline muted loop>
        <source src={"/videos/can-bg.mp4"} type="video/webm" />
      </video>
    </>
  );
}

function NutritionFactsImage() {
  return (
    <div className={styles.img}>
      <img src={`/images/nutritional-facts.png`} alt="" />
    </div>
  );
}
