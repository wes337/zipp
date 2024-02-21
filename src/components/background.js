import styles from "@/styles/background.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <video playsInline loop muted autoPlay>
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <img
        className={styles.checkerboard}
        src="/images/checkerboard.png"
        alt=""
      />
      <div className={styles.fruits} />
    </div>
  );
}
