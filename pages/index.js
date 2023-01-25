import Head from "next/head";
import Profile from "@/components/Profile";
import SoonWidget from "@/components/SoonWidget";
import Webring from "@/components/Webring";
import styles from '@/styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Zeyu Yao</title>
        <meta
          name="description"
          content="My personal website, built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Zeyu Yao" />
        <meta
          property="og:description"
          content="My personal website, built with Next.js"
        />
        <meta
          property="og:image"
          content="https://cytronicoder.com/og-image.png"
        />

        <meta name="twitter:title" content="Zeyu Yao" />
        <meta
          name="twitter:description"
          content="My personal website, built with Next.js"
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
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

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
        <SoonWidget />
        <Webring />
      </main>
    </div>
  );
}
