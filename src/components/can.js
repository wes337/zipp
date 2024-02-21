"use client";

import styles from "@/styles/can.module.scss";
import { supportsHEVCAlpha } from "@/utils/video";

export default function Can() {
  const can = supportsHEVCAlpha() ? "/videos/can.mov" : "/videos/can.webm";

  return (
    <div className={styles.can}>
      <video autoPlay playsInline muted loop>
        <source src={can} />
      </video>
      <video className={styles.background} autoPlay playsInline muted loop>
        <source src={can} />
      </video>
    </div>
  );
}
