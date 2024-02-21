import Link from "next/link";
import styles from "@/styles/top-bar.module.scss";

export default function TopBar() {
  return (
    <div className={styles["top-bar"]}>
      <Link className={styles.logo} href="/">
        <img src="/images/logo.png" alt="Zipp" />
      </Link>
    </div>
  );
}
