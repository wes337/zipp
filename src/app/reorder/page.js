import Shopify from "@/lib/shopify";

import ReorderButton from "./button";
import styles from "@/styles/reorder.module.scss";

const PRODUCT_ID = "gid://shopify/Product/7648749420578";
const product = await Shopify.getProduct(PRODUCT_ID);

export default function Reorder() {
  return (
    <div className={styles.reorder}>
      <p>
        Only use this link if referred by a Zipp team member! Other new orders
        not be processed.
      </p>
      <ReorderButton product={product} />
    </div>
  );
}
