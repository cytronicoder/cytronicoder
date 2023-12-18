import React, { useState, useEffect } from "react";
import Image from "next/image";

// Styles
import styles from "@/styles/Profile.module.css";

// Assets
import ProfilePic from "@/assets/profile.jpeg";
import GitHubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedInIcon from "@/assets/linkedin.svg";

const customAchievements = [
    "USACO Platinum Division",
    "2x AIME Qualifier",
    "1st SEA-AIME Rank",
    "USAMO Qualifier",
    "AMC10 Distinction",
];

export default function Profile() {
    const [achievements, setAchievements] = useState([]);
    const [profileImageUrl, setProfileImageUrl] = useState(ProfilePic);

    useEffect(() => {
        setAchievements(
            customAchievements.sort(() => Math.random() - 0.5).slice(0, 2)
        );

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
        const intervalId = setInterval(fetchProfileImage, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.profileHeader}>
            <a
                href="https://slack.cytronicoder.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={profileImageUrl}
                    alt="Profile picture"
                    width={200}
                    height={200}
                    className={styles.profileImage}
                />
            </a>

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
    );
}
