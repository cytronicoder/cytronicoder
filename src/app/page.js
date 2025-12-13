"use client"

import { lazy, Suspense, useState, useEffect } from "react";
import styles from "./page.module.css";
import ProfileImage from "./components/ProfileImage";
import ProfilePic from "../../public/profile.jpg";
import ThemeProvider from "./components/ThemeProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Webring from "./components/Webring";

import GitHubIcon from "../../public/github.svg";
import TwitterIcon from "../../public/twitter.svg";
import InstagramIcon from "../../public/instagram.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import OptimizedImage from "./components/OptimizedImage";

// const PhotoMarquee = lazy(() => import("./components/PhotoMarquee"));
const SpotifyWidget = lazy(() => import("./components/SpotifyWidget"));
const Projects = lazy(() => import("./components/Projects"));
const Snow = lazy(() => import("./components/Snow"));
const Countdown = lazy(() => import("./components/Countdown"));

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await fetch("/api/weather");
        const data = await res.json();
        setWeather(data.forecast || "unavailable");
      } catch (error) {
        console.error("Weather fetch error:", error);
        setWeather("unavailable");
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <section className={styles.intro}>
            <div className={styles.profileImageContainer}>
              <ProfileImage
                className={styles.profileImage}
                fallbackSrc={ProfilePic}
                alt="Profile Picture"
                width={125}
                height={125}
              />
              <img
                src="/hat.png"
                alt="Santa Hat"
                className={styles.santaHat}
              />
            </div>
            <div className={styles.introText}>
              <h1 className={styles.name}>Ho ho ho! I&apos;m <s>Peter</s> Santa Claus.{" "}<ThemeProvider /></h1>
              <p className={styles.subtitle}>
                Santa&apos;s workshop is always bustling with cheer 🎅
              </p>
              <div className={styles.socialMedia}>
                <div className={styles.socialMediaIcons}>
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
                <a
                  href="https://blog.cytronicoder.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogWidget}
                >
                  I have a blog! I write stuff now check it out →
                </a>
              </div>
            </div>
          </section>

          <section className={styles.bio}>
            <p className={styles.bioText}>
              I love spreading joy by working on{" "}
              <a href="https://research.cytronicoder.com/orcid-162573947" className={styles.link} target="_blank" rel="noopener noreferrer">single-cell analytics</a>,{" "}
              <a href="https://research.cytronicoder.com/biorsp-posters" className={styles.link} target="_blank" rel="noopener noreferrer">gene-expression dynamics</a>, and{" "}
              <a href="https://research.cytronicoder.com/garcia" className={styles.link} target="_blank" rel="noopener noreferrer">AI-driven discovery tools</a>{" "}
              to understand how complex cellular systems change, adapt, and break. My work has jingled all the way to IEEE BHI, GIW Asia, and ISMB/ECCB, among other major bioinformatics conferences. When I’m not busy in my workshop, I dabble in jazz guitar playing and chess.
            </p>
            <p className={styles.bioText}>
              I also care deeply about making STEM education as magical as Christmas morning. My goal is to build{" "}
              <a href="https://github.com/orgs/hackclub/repositories" className={styles.link} target="_blank" rel="noopener noreferrer">tools</a>{" "}
              and{" "}
              <a href="https://ijhscommunity.org" className={styles.link} target="_blank" rel="noopener noreferrer">communities</a>{" "}
              that make computational education more accessible, equitable, and impactful for all.
            </p>
          </section>

          <Suspense fallback={null}>
            <Countdown />
          </Suspense>

          {/* <section className={styles.section}>
            <Suspense fallback={
              <div className="flex items-center justify-center h-24 bg-gray-50 rounded-lg animate-pulse">
                <div className="text-gray-500">Loading widgets...</div>
              </div>
            }>
              <Projects />
              <SpotifyWidget />
            </Suspense>
          </section> */}

          <Webring />
        </div>
      </main>
      {/* <aside className={styles.marquee}>
        <Suspense fallback={
          <div className="flex items-center justify-center h-full bg-gray-50 animate-pulse">
            <div className="text-gray-500">Loading photo gallery...</div>
          </div>
        }>
          <PhotoMarquee />
        </Suspense>
      </aside> */}
      <PerformanceMonitor />
      <Suspense fallback={null}>
        <Snow />
      </Suspense>
    </div>
  );
}
