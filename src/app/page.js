import styles from "./page.module.css";
import PhotoMarquee from "./components/PhotoMarquee";
import Bio from "./components/Bio";
import ProfileImage from "./components/ProfileImage";
import ProfilePic from "../../public/profile.jpg";
import ThemeProvider from "./components/ThemeProvider";
import SpotifyWidget from "./components/SpotifyWidget";
import Projects from "./components/Projects";

import GitHubIcon from "../../public/github.svg";
import TwitterIcon from "../../public/twitter.svg";
import InstagramIcon from "../../public/instagram.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <section className={styles.intro}>
            <ProfileImage
              className={styles.profileImage}
              fallbackSrc={ProfilePic}
              alt="Profile Picture"
              width={150}
              height={150}
            />
            <div className={styles.introText}>
              <h1 className={styles.name}>Zeyu Yao{" "}<ThemeProvider /></h1>
              <p className={styles.subtitle}>
                High School Student & Aspiring Bioinformatics Researcher
              </p>
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
          </section>

          <section className={styles.section}>
            <Bio />
          </section>

          <section className={styles.section}>
            <SpotifyWidget />
          </section>

          <section className={styles.section}>
            <Projects />
          </section>
        </div>
      </main>

      <aside className={styles.marquee}>
        <PhotoMarquee />
      </aside>
    </div>
  );
}
