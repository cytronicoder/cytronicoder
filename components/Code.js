import styles from "@/styles/Code.module.css";

export default function Code({ children }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof children !== "string") {
      setError("Code component only accepts string children");
    }
  }, [children]);

  if (error) {
    return <p className={styles.description}>Error: {error}</p>;
  }

  return (
    <>
      <p className={styles.description}>Here is the code snippet behind-the-scenes:</p>
      <pre className={styles.code}>
        <code>{children}</code>
      </pre>
    </>
  );
}
