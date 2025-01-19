"use client";

import { IconX } from "@tabler/icons-react";
import { useNutritionFacts } from "@/lib/state";
import { CDN_URL } from "@/utils";
import styles from "@/styles/nutrition-facts.module.scss";

export default function NutritionFacts() {
  const { hide } = useNutritionFacts();

  return (
    <>
      <div className={styles["nutrition-facts"]}>
        <button className={styles.close} onClick={() => hide()}>
          <IconX size={40} stroke={4} />
        </button>
        <div className={styles.content}>
          <div className={styles.header}>Contains 46% Fruit Juice</div>
          <div className={styles.body}>
            <div className={styles.title}>Nutrition Facts</div>
            <div className={styles.full}>1 serving per container</div>
            <div className={styles.bold}>Serving size</div>
            <div className={styles.bold}>(355mL)</div>
            <hr className={styles["thick-line"]} />
            <div className={`${styles.right} ${styles.bold}`}>
              % Daily Value*
            </div>
            <div className={styles.row}>
              <div>
                <strong>Total Fat</strong> 0g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={styles["sub-row"]}>
              <div>
                <em>Saturated Fat</em> 0g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={styles["sub-row"]}>
              <div>
                <em>Trans Fat</em> 0g
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <strong>Cholesterol</strong> 0g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={styles.row}>
              <div>
                <strong>Sodium</strong> 0g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={styles.row}>
              <div>
                <strong>Total Carbohydrate</strong> 1g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={styles["sub-row"]}>
              <div>
                <em>Dietary Fiber</em> &lt;1g
              </div>
              <div className={styles.bold}>2%</div>
            </div>
            <div className={styles["sub-row"]}>
              <div>
                <em>Total Sugars</em> 12g
              </div>
            </div>
            <div className={styles["sub-sub-row"]}>
              <div>Includes 0g Added Sugars</div>
              <div className={styles.bold}>0%</div>
            </div>
            <div className={`${styles.row} ${styles.borderless}`}>
              <div>
                <strong>Protein</strong> 0g
              </div>
              <div className={styles.bold}>0%</div>
            </div>
            <hr className={styles["thick-line"]} />
            <div className={styles.row}>
              <div>Vitamin D 0mcg</div>
              <div>0%</div>
            </div>
            <div className={styles.row}>
              <div>Calcium 740mg</div>
              <div>60%</div>
            </div>
            <div className={styles.row}>
              <div>Iron 0.2mg</div>
              <div>0%</div>
            </div>
            <div className={styles.row}>
              <div>Potassium 60mg</div>
              <div>2%</div>
            </div>
            <div className={styles.row}>
              <div>Vitamin C 53mg</div>
              <div>60%</div>
            </div>
            <div className={styles.row}>
              <div>Vitamin C 53mg</div>
              <div>60%</div>
            </div>
            <div className={styles.row}>
              <div>Thiamin 0.2mg</div>
              <div>15%</div>
            </div>
            <div className={styles.row}>
              <div>Riboflavin 1.2mg</div>
              <div>90%</div>
            </div>
            <div className={styles.row}>
              <div>Niacin 3.3mg</div>
              <div>20%</div>
            </div>
            <div className={styles.row}>
              <div>Vitamin B6 0.3mg</div>
              <div>15%</div>
            </div>
            <div className={styles.row}>
              <div>Pantothenic Acid 0.8mg</div>
              <div>15%</div>
            </div>
            <div className={`${styles.row} ${styles.thick}`}>
              <div>Magnesium 0mg</div>
              <div>0%</div>
            </div>
          </div>
          <div className={styles.ingredients}>
            <strong>Ingredients:</strong> Reverse osmosis water, guava juice
            concentrate, contains less than 2% of: Cytoguard&#174; YM
            (preservative), natural mint and cherry flavor with other natural
            flavors, taurine, natural color (from spirulina and turmeric), gum
            arabic (emulsifier), L-phenylalanine, L-theanine, natural caffeine
            (from coffee beans), niacinimide (B3), biotin (B7), riboflavin (B2),
            pantothenic acid (B5), pyridoxine (B6), inositol (B8), thiamine
            (B1). <strong>Phenylketonurics: contains phenylalanine</strong>
          </div>
        </div>
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
