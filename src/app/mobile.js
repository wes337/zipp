import Can3D from "@/components/can-3d";
import Marquee from "@/components/marquee";
import TopBar from "@/components/top-bar";
import styles from "@/styles/home-mobile.module.scss";

export default function HomeMobile() {
  return (
    <div className={styles["home-mobile"]}>
      <TopBar />
      <div className={styles.can}>
        <Can3D />
      </div>
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
      <div className={styles.boosts}>
        <img src="/images/boosts.png" alt="" />
      </div>
      <div className={styles.soon}>
        <Marquee text="- Coming Soon " />
      </div>
      <div className={styles.footer}>&copy; iBubbbz LLC 2024</div>
    </div>
  );
}
