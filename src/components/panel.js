import styles from "@/styles/panel.module.scss";

export default function Panel({ children }) {
  return <div className={styles.panel}>{children}</div>;
}
