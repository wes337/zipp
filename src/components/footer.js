import Link from "next/link";
import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copy}>&copy; iBubbbz LLC 2024</div>
      <Link href="/policies/privacy-policy">Privacy policy</Link>
      <Link href="/policies/refund-policy">Refund Policy</Link>
    </div>
  );
}
