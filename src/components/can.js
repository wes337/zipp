import styles from "@/styles/can.module.scss";

export default function Can() {
  return (
    <div className={styles.can}>
      <video autoPlay playsInline muted loop>
        <source src="/videos/can.webm" />
      </video>
      <video className={styles.background} autoPlay playsInline muted loop>
        <source src="/videos/can.webm" />
      </video>
    </div>
  );
}
