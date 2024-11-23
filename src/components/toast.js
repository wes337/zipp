import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import styles from "@/styles/toast.module.scss";

export default function Toast({ text, close, action }) {
  return (
    <div
      className={`${styles.toast} ${
        text && text.length > 0 ? styles.show : ""
      }`}
    >
      <div className={styles.body}>
        <p>{text || ""}</p>
        {action && (
          <Link className={styles.action} href={action.href} onClick={close}>
            {action.text}
          </Link>
        )}
        <button className={styles.close} onClick={close}>
          <IconX size={40} stroke={3} />
        </button>
      </div>
    </div>
  );
}
