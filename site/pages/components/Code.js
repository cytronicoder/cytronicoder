import styles from "../../styles/Code.module.css";

export default function Code({ language, children }) {
  return (
    <pre className={styles.code}>
      <code className={styles[language]}>{children}</code>
    </pre>
  );
}
