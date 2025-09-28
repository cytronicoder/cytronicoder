import { lazy, Suspense } from "react";
import styles from "./page.module.css";
import Bio from "./components/Bio";
import ProfileImage from "./components/ProfileImage";
import ProfilePic from "../../public/profile.jpg";
import ThemeProvider from "./components/ThemeProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";

import GitHubIcon from "../../public/github.svg";
import TwitterIcon from "../../public/twitter.svg";
import InstagramIcon from "../../public/instagram.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import OptimizedImage from "./components/OptimizedImage";

const PhotoMarquee = lazy(() => import("./components/PhotoMarquee"));
const SpotifyWidget = lazy(() => import("./components/SpotifyWidget"));
const Projects = lazy(() => import("./components/Projects"));

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
                Grade 11 student in Singapore
              </p>
              <div className={styles.socialMedia}>
                <a
                  href="https://github.com/cytronicoder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OptimizedImage
                    src={GitHubIcon}
                    alt="GitHub logo"
                    width={32}
                    height={32}
                    className={styles.socialMediaIcon}
                    priority={true}
                    sizes="32px"
                  />
                </a>
                <a
                  href="https://twitter.com/cytronicoder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OptimizedImage
                    src={TwitterIcon}
                    alt="Twitter logo"
                    width={32}
                    height={32}
                    className={styles.socialMediaIcon}
                    priority={true}
                    sizes="32px"
                  />
                </a>
                <a
                  href="https://www.instagram.com/cytronicoder/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OptimizedImage
                    src={InstagramIcon}
                    alt="Instagram logo"
                    width={32}
                    height={32}
                    className={styles.socialMediaIcon}
                    priority={true}
                    sizes="32px"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/cytronicoder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OptimizedImage
                    src={LinkedInIcon}
                    alt="LinkedIn logo"
                    width={32}
                    height={32}
                    className={styles.socialMediaIcon}
                    priority={true}
                    sizes="32px"
                  />
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <Bio />
          </section>

          <section className={styles.section}>
            <Suspense fallback={
              <div className="flex items-center justify-center h-24 bg-gray-50 rounded-lg animate-pulse">
                <div className="text-gray-500">Loading Spotify widget...</div>
              </div>
            }>
              <SpotifyWidget />
            </Suspense>
          </section>

          <section className={styles.section}>
            <Suspense fallback={
              <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg animate-pulse">
                <div className="text-gray-500">Loading projects...</div>
              </div>
            }>
              <Projects />
            </Suspense>
          </section>
        </div>
      </main>

      <aside className={styles.marquee}>
        <Suspense fallback={
          <div className="flex items-center justify-center h-full bg-gray-50 animate-pulse">
            <div className="text-gray-500">Loading photo gallery...</div>
          </div>
        }>
          <PhotoMarquee />
        </Suspense>
      </aside>
      <PerformanceMonitor />
    </div>
  );
}
