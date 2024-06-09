import styles from "@/styles/marquee.module.scss";

export default function Marquee(props) {
  return (
    <div className={styles.marquee}>
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className={`${styles["marquee-content"]} ${styles.scroll}`}
          style={{
            animationDuration: props.duration ? props.duration : undefined,
          }}
        >
          {props.text.repeat(4)}
        </div>
      ))}
    </div>
  );
}
