import Image from "next/image";
import styles from "../../styles/Profile.module.css";

import Projects from "./Projects";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <Image
          src="/profile.jpg"
          alt="A picture of me"
          width={200}
          height={200}
          className={styles.profileImage}
        />

        <div className={styles.profileTitle}>
          <h1 className={styles.title}>Zeyu Yao</h1>
        </div>

        <div className={styles.socialMedia}>
          <a
            href="https://github.com/cytronicoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/github.svg"
              alt="GitHub logo"
              width={32}
              height={32}
              className={styles.socialMediaIcon}
            />
          </a>
          <a
            href="https://twitter.com/cytronicoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/twitter.svg"
              alt="Twitter logo"
              width={32}
              height={32}
              className={styles.socialMediaIcon}
            />
          </a>
          <a
            href="https://www.instagram.com/cytronicoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/instagram.svg"
              alt="Instagram logo"
              width={32}
              height={32}
              className={styles.socialMediaIcon}
            />
          </a>
        </div>
      </div>

      <div className={styles.profileDescription}>
        <p>
          👋 Hey! I'm Peter, and I am a web developer currently studying in
          Singapore. I mainly dabble in web development but also learn
          competitive programming and graphics design. In addition, I like to
          travel around Singapore, play video games, and read in my free time.
        </p>
      </div>
    </div>
  );
}
