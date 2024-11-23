import { create } from "zustand";

export const useNutritionFacts = create((set) => ({
  visible: false,
  show: () => set(() => ({ visible: true })),
  hide: () => set(() => ({ visible: false })),
}));
