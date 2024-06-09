import { IconShoppingCart } from "@tabler/icons-react";
import TopBar from "@/components/top-bar";
import Can from "@/components/can";
import Button from "@/components/button";
import { LEAD_TEXT } from "./text";
import styles from "@/styles/home-desktop.module.scss";
import Marquee from "@/components/marquee";

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
        <Can />
      </div>
      <div className={styles.lead}>
        <div className={styles.info}>
          <div className={styles.item}>
            <img src="/images/real-juice.png" alt="Made With Real Juice" />
          </div>
          <div className={styles.item}>
            <img src="/images/natural-colors.png" alt="Natural Colors" />
          </div>
          <div className={styles.item}>
            <img src="/images/natural-flavors.png" alt="Natural Flavors" />
          </div>
          <div className={styles.item}>
            <img src="/images/bio.png" alt="Bio Delectable" />
          </div>
        </div>
        <p className={styles.text}>{LEAD_TEXT}</p>
        <Button>
          <IconShoppingCart stroke={4} size={40} /> Coming Soon
        </Button>
        <div className={styles.hotline}>
          <img src="/images/hotline.png" alt="" />
        </div>
      </div>
    </div>
  );
}
