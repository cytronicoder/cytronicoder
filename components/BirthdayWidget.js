import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/DefaultWidget.module.css";

// Assets
import CakeLogo from "@/assets/cake.svg";

export default function BirthdayWidget() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={CakeLogo}
          alt="Birthday cake!"
          width={24}
          height={24}
          className={styles.logo}
        />
        <div className={styles.header}>
          <h2 className={styles.title}>My <Link href="/birthday">birthday</Link> is coming up!</h2>
        </div>
      </div>
    </div>
  );
}
