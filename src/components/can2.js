"use client";
import { ErrorBoundary } from "react-error-boundary";
import { useNutritionFacts } from "@/lib/state";
import Can from "@/components/can";
import Can3D from "@/components/can-3d";
import NutritionFacts from "@/components/nutrition-facts";

export default function CanView() {
  const { visible } = useNutritionFacts();

  if (visible) {
    return (
      <ErrorBoundary>
        <NutritionFacts />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={<Can />}>
      <Can3D />
    </ErrorBoundary>
  );
}
