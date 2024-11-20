import Shopify from "@/lib/shopify";
import CanView from "@/components/can-view";
import Marquee from "@/components/marquee";
import TopBar from "@/components/top-bar";
import BuyButton from "@/components/buy-button";
import styles from "@/styles/home-mobile.module.scss";

const PRODUCT_ID = "gid://shopify/Product/7648749420578";
const product = await Shopify.getProduct(PRODUCT_ID);

export default function HomeMobile() {
  return (
    <div className={styles["home-mobile"]}>
      <TopBar />
      <div className={styles.can}>
        <CanView />
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
