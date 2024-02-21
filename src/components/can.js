"use client";

import { supportsHEVCAlpha } from "@/utils/video";
import styles from "@/styles/can.module.scss";

export default function Can() {
  return (
    <div className={styles.can}>
      <video autoPlay playsInline muted loop>
        <source
          src={supportsHEVCAlpha() ? "/videos/can.mp4" : "/videos/can.webm"}
        />
      </video>
      <video className={styles.background} autoPlay playsInline muted loop>
        <source
          src={supportsHEVCAlpha() ? "/videos/can.mp4" : "/videos/can.webm"}
          type={supportsHEVCAlpha() ? "video/mp4;codecs=hvc1" : "video/webm"}
        />
      </video>
    </div>
  );
}
