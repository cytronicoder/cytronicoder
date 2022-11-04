import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./Profile.module.css";

import Achievements from "../items/Achievements";
import Projects from "./Projects";

export default function Profile({ isHack }) {
  // fetch projects from github api
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch(
      "https://api.github.com/users/cytronicoder/repos"
    );
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <Image
          src={isHack ? "/profile-hack.jpg" : "/profile.jpg"}
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
        {isHack ? (
          <>
            <p>
              👋 Hey! If you're part of Hack Club, you might know me as{" "}
              <a
                href="https://slack.hackclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cytronicoder
              </a>{" "}
              on Slack. I'm the founder of the{" "}
              <a
                href="https://github.com/sais-hack-club"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAIS Hack Club
              </a>
              , a high school hack club in Singapore. If you see me around, feel
              free to say hi! I'm always happy to meet new people and
              collaborate on projects.
            </p>
          </>
        ) : (
          <>
            <p>
              👋 Hey! I'm Peter, and I am a web developer currently studying in
              Singapore. I mainly dabble in web development but also learn
              competitive programming and graphics design. In addition, I like
              to travel around Singapore, play video games, and read in my free
              time.
            </p>

            <Achievements />
            <Projects projects={projects} />
          </>
        )}
      </div>
    </div>
  );
}
