import Head from "next/head";
import Profile from "@/components/Profile";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import Projects from "@/components/Projects";
import Webring from "@/components/Webring";

import styles from '@/styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Zeyu Yao</title>
        <meta
          name="description"
          content="Grade 9 student and full-stack developer currently studying in Singapore"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Zeyu Yao" />
        <meta
          property="og:description"
          content="Grade 9 student and full-stack developer currently studying in Singapore"
        />
        <meta
          property="og:image"
          content="https://cytronicoder.com/og-image.png"
        />
        <meta property="og:url" content="https://cytronicoder.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Zeyu Yao" />
        <meta
          name="twitter:description"
          content="Grade 9 student and full-stack developer currently studying in Singapore"
        />
        <meta
          name="twitter:image"
          content="https://cytronicoder.com/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@cytronicoder" />
        <meta name="twitter:creator" content="@cytronicoder" />

        <meta name="apple-mobile-web-app-title" content="Zeyu Yao" />
        <meta name="application-name" content="Zeyu Yao" />
        <meta name="msapplication-TileColor" content="#ec3750" />
        <meta name="theme-color" content="#ec3750" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Profile />
        <CurrentlyPlaying />
        <Projects />
        <Webring />
      </main>
    </div>
  );
}
