import Image from "next/image";
import styles from "@/styles/Profile.module.css";

import ProfilePic from "@/assets/profile.jpeg";

import GitHubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

import Typewriter from 'typewriter-effect';
import CurrentlyPlaying from "./CurrentlyPlaying";

export default function Profile() {

  // Custom bio for the typewriter effect
  const customBio = [
    "a student developer currently studying in Singapore.",
    "a 14-year-old who loves to create things!",
    "a web3 enthusiast - gm!",
    "a professional procrastinator...",
    "a full-stack developer who dabbles in design and data science.",
    "a self-taught developer 2 years into the journey.",
    "a student exploring the endless possibilities of technology and coding.",
    "certified USACO Platinum boi on that C++ grind.",
  ];

  const customAchievements = [
    "USACO Platinum division",
    "Distinction @ AMC 10",
    "2x AIME qualifier",
  ];

  const achievements = customAchievements.sort(() => Math.random() - 0.5).slice(0, 2);

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

        <div className={styles.achievements}>
          <p>{achievements[0]}</p>
          <p>{achievements[1]}</p>
        </div>
      </div>

      <div className={styles.profileDescription}>
        <p>
          👋 Hey, I am Peter, {" "}<span className={styles.oneliner}><Typewriter
            options={{
              strings: customBio,
              autoStart: true,
              loop: true,
              cursorClassName: styles.cursor,
            }}
          /></span>
        </p>
        <p>
          I started programming at 13, and in the past year, I have built <a href="https://github.com/cytronicoder/singapore-taxified" target="_blank" rel="noopener noreferrer" className={styles.underline_on_hover}>a website that tracks more than 1.8k available taxis in Singapore,</a>{" "}
          worked with AI to create a fully functional <a href="https://github.com/cytronicoder/stock-data-visualiser" target="_blank" rel="noopener noreferrer" className={styles.underline_on_hover}>LSTM model</a> that can predict stock prices, and did so much more.
          I plan to pursue further my passion for computer science to contribute to my community.
        </p>
      </div>

      <div className={styles.profileCurrentlyPlaying}>
        <CurrentlyPlaying />
      </div>
    </div>
  );
}
