import Head from "next/head";

// Styles
import styles from "@/styles/Home.module.css";

// Components
import Header from "@/components/Header";
import Bio from "@/components/Bio";
import Projects from "@/components/Projects";
import TabsContainer from "@/components/TabsContainer";
import BlogWidget from "@/components/BlogWidget";
import CurrentlyPlaying from "@/components/CurrentlyPlaying";
import BirthdayWiget from "@/components/BirthdayWidget";
import Webring from "@/components/Webring";
// import Soon from "@/components/Soon";

export default function Home() {

  const tabs = [
    { id: 'bio', title: 'Bio', content: <Bio /> },
    { id: 'projects', title: 'Projects', content: <Projects /> },
    // { id: 'webring', title: 'Webring', content: <Webring /> },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Zeyu Yao | Portfolio</title>
        <meta
          name="description"
          content="Grade 10 student and full-stack developer currently studying in Singapore"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Zeyu Yao" />
        <meta
          property="og:description"
          content="Grade 10 student and full-stack developer currently studying in Singapore"
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
          content="Grade 10 student and full-stack developer currently studying in Singapore"
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
        <meta name="msapplication-TileColor" content="#a633d6" />
        <meta name="theme-color" content="#a633d6" />

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
        <Header />
        <TabsContainer components={tabs} />
        <div className={styles.widgets}>
          {/* <BlogWidget /> */}
          <CurrentlyPlaying />
          {/* <BirthdayWiget /> */}
          <Webring />
        </div>
        {/* <Soon /> */}
      </main>
    </div>
  );
}
