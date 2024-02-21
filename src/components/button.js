import styles from "@/styles/button.module.scss";

export default function Button({ children, type, onClick, disabled }) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
