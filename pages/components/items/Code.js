import styles from "./Code.module.css";

export default function Code({ children }) {
  return (
    <pre className={styles.code}>
      <code>{children}</code>
    </pre>
  );
}
