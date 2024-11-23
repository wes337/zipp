import Link from "next/link";
import { CDN_URL } from "@/utils";
import styles from "@/styles/top-bar.module.scss";

export default function TopBar() {
  return (
    <div className={styles["top-bar"]}>
      <Link className={styles.logo} href="/">
        <img src={`${CDN_URL}/images/logo-with-cherry.png`} alt="Zipp" />
      </Link>
    </div>
  );
}
