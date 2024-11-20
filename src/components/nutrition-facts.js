"use client";

import { useNutritionFacts } from "@/lib/state";
import { useState, useEffect } from "react";
import styles from "@/styles/nutrition-facts.module.scss";

export default function NutritionFacts() {
  const { visible } = useNutritionFacts();

  return <div className={styles["nutrition-facts"]}>hello world</div>;
}
