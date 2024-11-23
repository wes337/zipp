import Shopify from "@/lib/shopify";
import { CDN_URL, IS_LIVE } from "@/utils";
import TopBar from "@/components/top-bar";
import CanView from "@/components/can-view";
import Marquee from "@/components/marquee";
import BuyButton from "@/components/buy-button";
import { LEAD_TEXT } from "./text";
import styles from "@/styles/home-desktop.module.scss";
import Button from "@/components/button";

const PRODUCT_ID = "gid://shopify/Product/7648749420578";
const product = await Shopify.getProduct(PRODUCT_ID);

export default function HomeDesktop() {
  return (
    <div className={styles["home-desktop"]}>
      <TopBar />
      <div className={styles.marquee}>
        <Marquee
          text="- Unzipp Your Mindd - Make then... Now - Liquid Time - Gift Of Drink "
          duration="60s"
        />
      </div>
      <div className={styles.can}>
        <CanView />
      </div>
      <div className={styles.lead}>
        <div className={styles.info}>
          <div className={styles.item}>
            <img
              src={`${CDN_URL}/images/real-juice.png`}
              alt="Made With Real Juice"
            />
          </div>
          <div className={styles.item}>
            <img
              src={`${CDN_URL}/images/natural-colors.png`}
              alt="Natural Colors"
            />
          </div>
          <div className={styles.item}>
            <img
              src={`${CDN_URL}/images/natural-flavors.png`}
              alt="Natural Flavors"
            />
          </div>
          <div className={styles.item}>
            <img src={`${CDN_URL}/images/bio.png`} alt="Bio Delectable" />
          </div>
        </div>
        <p className={styles.text}>{LEAD_TEXT}</p>
        {IS_LIVE ? (
          <div className={styles.buy}>
            <BuyButton product={product} />
          </div>
        ) : (
          <div className={`${styles.buy} ${styles.soon}`}>
            <Button>Coming Soon</Button>
          </div>
        )}
      </div>
    </div>
  );
}
