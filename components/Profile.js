import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

// Styles
import styles from "@/styles/Profile.module.css";

// Assets
import ProfilePic from "@/assets/profile.jpeg";
import GitHubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

// Components
import CurrentlyPlaying from "./CurrentlyPlaying";
import BlogWidget from "./BlogWidget";
// import BirthdayWiget from "@/components/BirthdayWidget";

const customBio = [
  "a student developer currently studying in Singapore.",
  "a 15-year-old who loves to create.",
  "a web3 enthusiast.",
  "a professional procrastinator.",
  "a full-stack developer who dabbles in design and data science.",
  "a self-taught developer 2 years into the journey.",
  "a student exploring the endless possibilities of technology and coding.",
  "a certified USACO Platinum divisioner on that C++ grind.",
  "a researcher in the field of bioinformatics.",
  "a guy who presents at events way too much.",
];

const customAchievements = [
  "USACO Platinum Division",
  "2x AIME Qualifier",
  "1st SEA-AIME Rank",
  "USAMO Qualifier",
  "AMC10 Distinction",
];

export default function Profile() {
  const [bio, setBio] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [profileImageUrl, setProfileImageUrl] = useState(ProfilePic);

  useEffect(() => {
    setBio(customBio.sort(() => Math.random() - 0.5));
    setAchievements(
      customAchievements.sort(() => Math.random() - 0.5).slice(0, 2)
    );

    // Fetch the profile image URL from the API every 15 minutes and update the state
    const fetchProfileImage = async () => {
      try {
        const response = await fetch("/api/profileImage");
        const data = await response.json();
        setProfileImageUrl(data.imageUrl);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };

    fetchProfileImage(); // Fetch the image on component mount
    const intervalId = setInterval(fetchProfileImage, 15 * 60 * 1000); // Set up the interval

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <Image
          src={profileImageUrl}
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
        <div className={styles.staticText}>
          👋 Hey, I am Peter,{" "}
          <div className={styles.oneliner}>
            <Typewriter
              options={{
                strings: bio,
                autoStart: true,
                loop: true,
                cursorClassName: styles.cursor,
              }}
            />
          </div>
        </div>
        <p>
          I built a{" "}
          <a
            href="https://github.com/cytronicoder/singapore-taxified"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline_on_hover}
          >
            website that tracks 1.8k+ taxis
          </a>{" "}
          in Singapore, a{" "}
          <a
            href="https://github.com/cytronicoder/stock-data-visualiser"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline_on_hover}
          >
            stock price predictor,
          </a>{" "}
          and an{" "}
          <a
            href="https://github.com/cytronicoder/stock-data-visualiser"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline_on_hover}
          >
            AI-assisted aircraft taxiing system.
          </a>{" "}
          I also founded the{" "}
          <a
            href="https://saishack.club/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline_on_hover}
          >
            SAIS Hack Club,
          </a>{" "}
          where I lead workshops on computer science topics at my school.
        </p>
        <p>
          In my free time, you can find me immersed in (or ranting about) a good
          book, vibing to my{" "}
          <a
            href="https://open.spotify.com/playlist/0u39epTT1qhLd2COWU1vtC"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline_on_hover}
          >
            favorite music,
          </a>{" "}
          engaging in my swim team, or simply socializing with friends. I plan
          to pursue further my passion for computer science to contribute to my
          community.
        </p>
      </div>

      <div className={styles.widgets}>
        <BlogWidget />
        <CurrentlyPlaying />
        {/* <BirthdayWiget /> */}
      </div>
    </div>
  );
}
