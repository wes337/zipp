import styles from "@/styles/background.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <img
        className={styles.desktop}
        src="/images/background-small.png"
        alt=""
      />
      <img
        className={styles.mobile}
        src="/images/background-mobile.png"
        alt=""
      />
      <img
        className={styles.checkerboard}
        src="/images/checkerboard.png"
        alt=""
      />
      <div className={styles.fruits} />
    </div>
  );
}
