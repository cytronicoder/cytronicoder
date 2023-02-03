import Image from "next/image";
import styles from "@/styles/Profile.module.css";

import ProfilePic from "@/assets/profile.jpeg";

import GitHubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <Image
          src={ProfilePic}
          alt="Profile picture"
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
              src={GitHubIcon}
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
              src={TwitterIcon}
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
              src={InstagramIcon}
              alt="Instagram logo"
              width={32}
              height={32}
              className={styles.socialMediaIcon}
            />
          </a>
          <a
            href="https://linkedin.com/in/cytronicoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LinkedInIcon}
              alt="LinkedIn logo"
              width={32}
              height={32}
              className={styles.socialMediaIcon}
            />
          </a>
        </div>
      </div>

      <div className={styles.profileDescription}>
        <p>
          👋 Hey! I am Peter, a student developer currently studying in Singapore.
          I started programming at 13, and in the past year, I have <a href="https://github.com/buildspace/buildspace-faq" target="_blank" rel="noopener noreferrer">contributed documentation</a> for a startup that recently raised $10M from a16z,{" "}
          worked with AI to create a fully functional <a href="https://github.com/cytronicoder/stock-data-visualiser" target="_blank" rel="noopener noreferrer">LSTM model</a> that can predict stock prices, and did so much more.
          I plan to pursue further my passion for computer science to contribute to my community.
        </p>
      </div>
    </div>
  );
}
