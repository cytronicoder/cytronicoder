import styles from "@/styles/Code.module.css";

export default function Code({ children }) {
  return (
    <>
      <p className={styles.description}>Here is the code snippet behind-the-scenes:</p>
      <pre className={styles.code}>
        <code>{children}</code>
      </pre>
    </>
  );
}
