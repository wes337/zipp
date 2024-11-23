"use client";

import { useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";
import { useToast } from "@/hooks/toast";
import { useShopify } from "@/hooks/shopify";
import { formatPriceInUSD } from "@/utils";
import Button from "@/components/button";
import styles from "@/styles/product.module.scss";

export default function Product({ product }) {
  const [previewPhoto, setPreviewPhoto] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { buyItNow } = useShopify();

  const productId = product.variants?.[0]?.id || product.id;
  const photos = ["/images/placeholder.png", "/images/placeholder-2.png"];

  return (
    <div className={styles.product}>
      <div className={styles.photos}>
        <button
          className={styles.prev}
          onClick={() =>
            setPreviewPhoto((photo) => {
              const nextPhoto = photo - 1;
              if (nextPhoto < 0) {
                return photos.length - 1;
              }

              return nextPhoto;
            })
          }
        >
          <IconArrowLeft size={48} stroke={3} />
        </button>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`${styles.photo} ${
              previewPhoto === index ? styles.show : ""
            }`}
          >
            <img src={photo} alt="" />
          </div>
        ))}
        <button
          className={styles.next}
          onClick={() =>
            setPreviewPhoto((photo) => {
              const nextPhoto = photo + 1;
              if (nextPhoto >= photos.length) {
                return 0;
              }

              return nextPhoto;
            })
          }
        >
          <IconArrowRight size={48} stroke={3} />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.size}>{product.variants[0].title}</div>
        <div className={styles.price}>{formatPriceInUSD(product.price)}</div>
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
          <Button
            onClick={async () => {
              if (loading) {
                return;
              }

              setLoading(true);
              await buyItNow(productId, quantity);
              setLoading(false);
            }}
            small
            alt
          >
            Buy it Now
          </Button>
        </div>
        <div className={styles.description}>{product.description}</div>
      </div>
    </div>
  );
}
