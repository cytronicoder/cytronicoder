import Image from "next/image";
import styles from "./Widget.module.css";

export default function Widget({ logo, title, children }) {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetHeader}>
        <Image
          src={logo}
          alt={`${title} logo`}
          width={32}
          height={32}
          className={styles.widgetLogo}
        />
        <h2 className={styles.widgetTitle}>{title}</h2>
      </div>
      <div className={styles.widgetBody}>
        {children}
      </div>
    
    </div>
  );
}
