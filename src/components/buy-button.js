"use client";

import { useState } from "react";
import { useNutritionFacts } from "@/lib/state";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { useShopify } from "@/hooks/shopify";
import { formatPriceInUSD } from "@/utils";
import Button from "@/components/button";
import styles from "@/styles/buy-button.module.scss";

export default function BuyButton({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { buyItNow } = useShopify();
  const { show, hide } = useNutritionFacts();

  const productId = product.variants?.[0]?.id || product.id;

  const size = product.variants?.[0]?.title || "12 Pack";
  const price = formatPriceInUSD(product.price);

  return (
    <>
      <div className={styles["buy-button-desktop"]}>
        <div className={styles.row}>
          <div className={styles.size}>{size}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.quantity}>
            <button
              onClick={() =>
                setQuantity((quantity) => Math.max(quantity - 1, 1))
              }
            >
              <IconMinus size={24} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((quantity) => Math.min(quantity + 1, 10))
              }
            >
              <IconPlus size={24} />
            </button>
          </div>
          <div className={styles.buy}>
            <Button
              onClick={async () => {
                if (loading) {
                  return;
                }

                setLoading(true);
                await buyItNow(productId, quantity);
                setLoading(false);
              }}
              alt
            >
              Buy Now
            </Button>
          </div>
          <div className={styles.nutrition}>
            <Button small onClick={() => show()}>
              Nutrition Facts
            </Button>
          </div>
        </div>
      </div>
      <div className={styles["buy-button-mobile"]}>
        <div className={styles.size}>{size}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.row}>
          <div className={styles.quantity}>
            <button
              onClick={() =>
                setQuantity((quantity) => Math.max(quantity - 1, 1))
              }
            >
              <IconMinus size={24} />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() =>
                setQuantity((quantity) => Math.min(quantity + 1, 10))
              }
            >
              <IconPlus size={24} />
            </button>
          </div>
          <div className={styles.buy}>
            <Button
              onClick={async () => {
                if (loading) {
                  return;
                }

                setLoading(true);
                await buyItNow(productId, quantity);
                setLoading(false);
              }}
              alt
              small
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className={styles.nutrition}>
          <Button small onClick={() => show()}>
            Nutrition Facts
          </Button>
        </div>
      </div>
    </>
  );
}
