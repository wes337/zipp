import Link from "next/link";
import styles from "@/styles/top-bar.module.scss";

export default function TopBar() {
  return (
    <div className={styles["top-bar"]}>
      <Link className={styles.logo} href="/">
        <img
          className={styles.desktop}
          src="/images/logo-full.png"
          alt="Zipp"
        />
        <img
          className={styles.mobile}
          src="/images/logo-with-cherry.png"
          alt="Zipp"
        />
      </Link>
    </div>
  );
}
