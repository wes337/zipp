import { CDN_URL } from "@/utils";
import styles from "@/styles/background.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <img
        className={styles.desktop}
        src={`${CDN_URL}/images/background-small.png`}
        alt=""
      />
      <img
        className={styles.mobile}
        src={`${CDN_URL}/images/background-mobile.png`}
        alt=""
      />
      <img
        className={styles.checkerboard}
        src={`${CDN_URL}/images/checkerboard.png`}
        alt=""
      />
      <div className={styles.fruits} />
    </div>
  );
}
