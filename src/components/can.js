"use client";

import { isSafari } from "@/utils/browser";
import styles from "@/styles/can.module.scss";

export default function Can() {
  const useImage = isSafari();

  if (useImage) {
    return (
      <div className={styles.can}>
        <img src="/images/can.png" alt="" />
        <img className={styles.background} src="/images/can.png" alt="" />
      </div>
    );
  }

  return (
    <div className={styles.can}>
      <video autoPlay playsInline muted loop>
        <source src={"/videos/can.webm"} type="video/webm" />
      </video>
      <video className={styles.background} autoPlay playsInline muted loop>
        <source src={"/videos/can.webm"} type="video/webm" />
      </video>
    </div>
  );
}
