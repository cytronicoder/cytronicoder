import Head from "next/head";
import styles from '@/styles/Konjer.module.css'

export default function Konjer() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Konjer | Zeyu Yao</title>
        <meta
          name="description"
          content="I've partnered with Konjer to help bring books alive."
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Konjer | Zeyu Yao" />
        <meta
          property="og:description"
          content="I've partnered with Konjer to help bring books alive."
        />
        <meta
          property="og:image"
          content="https://cytronicoder.com/konjer-og-image.png"
        />

        <meta name="twitter:title" content="Konjer | Zeyu Yao" />
        <meta
          name="twitter:description"
          content="I've partnered with Konjer to help bring books alive."
        />
        <meta
          name="twitter:image"
          content="https://cytronicoder.com/konjer-og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@cytronicoder" />
        <meta name="twitter:creator" content="@cytronicoder" />

        <meta name="apple-mobile-web-app-title" content="Konjer" />
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
        <p className={styles.description}>
            Coming soon!
        </p>
      </main>
    </div>
  );
}
