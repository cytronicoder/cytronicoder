import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/DefaultWidget.module.css";

// Assets
import CakeLogo from "@/assets/cake.svg";

export default function BlogWidget() {
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
          <h2 className={styles.title}>
            I made a blog! Go check it out{" "}
            <Link href="https://blog.cytronicoder.com">here!</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
