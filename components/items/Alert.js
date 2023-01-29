import styles from "@/styles/Alert.module.css";

export default function Alert({ link, children }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={styles.alert}>
                {children}
            </div>
        </a>
    );
}
