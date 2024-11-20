"use client";

import { isIOS, isSafari, CDN_URL } from "@/utils";
import styles from "@/styles/can.module.scss";

export default function Can() {
  const useImage = isSafari() || isIOS();

  if (useImage) {
    return (
      <div className={styles["can-image"]}>
        <img src={`${CDN_URL}/images/can.png`} alt="" />
      </div>
    );
  }

  return (
    <div className={styles.can}>
      <video autoPlay playsInline muted loop>
        <source src={`${CDN_URL}/videos/can.webm`} type="video/webm" />
      </video>
      <video className={styles.background} autoPlay playsInline muted loop>
        <source src={`${CDN_URL}/videos/can-bg.mp4`} type="video/webm" />
      </video>
    </div>
  );
}
