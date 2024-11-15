import styles from "@/styles/button.module.scss";

export default function Button({
  children,
  type,
  onClick,
  disabled,
  small,
  alt,
}) {
  const getClassName = () => {
    let className = styles.button;

    if (small) {
      className += ` ${styles.small}`;
    }

    if (alt) {
      className += ` ${styles.alt}`;
    }

    return className;
  };

  return (
    <button
      className={getClassName()}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
