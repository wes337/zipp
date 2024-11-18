import { ErrorBoundary } from "react-error-boundary";
import Shopify from "@/lib/shopify";
import Can from "@/components/can";
import Can3D from "@/components/can-3d";
import Marquee from "@/components/marquee";
import TopBar from "@/components/top-bar";
import styles from "@/styles/home-mobile.module.scss";
import BuyButton from "@/components/buy-button";

const PRODUCT_ID = "gid://shopify/Product/7648749420578";
const product = await Shopify.getProduct(PRODUCT_ID);

export default function HomeMobile() {
  return (
    <div className={styles["home-mobile"]}>
      <TopBar />
      <div className={styles.can}>
        <ErrorBoundary fallback={<Can />}>
          <Can3D />
        </ErrorBoundary>
      </div>
      <div className={styles.soon}>
        <Marquee
          text="- Unzipp Your Mindd - Make then... Now - Liquid Time - Gift Of Drink "
          duration="60s"
        />
      </div>
      <div className={styles.buy}>
        <BuyButton product={product} />
      </div>
    </div>
  );
}
