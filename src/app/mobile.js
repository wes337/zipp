import Shopify from "@/lib/shopify";
import { CDN_URL, IS_LIVE } from "@/utils";
import CanView from "@/components/can-view";
import Marquee from "@/components/marquee";
import TopBar from "@/components/top-bar";
import BuyButton from "@/components/buy-button";
import styles from "@/styles/home-mobile.module.scss";
import Button from "@/components/button";

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
      {IS_LIVE ? (
        <div className={styles.buy}>
          <BuyButton product={product} />
        </div>
      ) : (
        <>
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
          <div className={`${styles.buy} ${styles.soon}`}>
            <Button>Pre-Orders Closed</Button>
            <Button>Grand Opening In April</Button>
          </div>
        </>
      )}
    </div>
  );
}
