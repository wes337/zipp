"use client";

import { useShopify } from "@/hooks/shopify";
import styles from "@/styles/reorder-button.module.scss";

export default function ReorderButton({ product }) {
  const { buyItNow } = useShopify();

  const productId = product.variants?.[0]?.id || product.id;

  return (
    <div className={styles.reorderButton}>
      <button
        onClick={async () => {
          await buyItNow(productId, 1);
        }}
      >
        Re-Order
      </button>
    </div>
  );
}
