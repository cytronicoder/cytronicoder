import Head from "next/head";
import styles from '@/styles/Konjer.module.css'
import KonjerAffiliate from "@/components/items/KonjerAffiliate";

import Image from "next/image";
import KonjerBackground from "@/assets/konjer.jpeg";

export default function Konjer() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Konjer | Zeyu Yao</title>
                <meta
                    name="description"
                    content="I have partnered with Konjer to help bring books alive."
                />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Konjer | Zeyu Yao" />
                <meta
                    property="og:description"
                    content="I have partnered with Konjer to help bring books alive."
                />
                <meta
                    property="og:image"
                    content="https://cytronicoder.com/konjer-og-image.png"
                />

                <meta name="twitter:title" content="Konjer | Zeyu Yao" />
                <meta
                    name="twitter:description"
                    content="I have partnered with Konjer to help bring books alive."
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
                <div className={styles.konjer}>
                    <Image
                        className={styles.konjerImage}
                        src={KonjerBackground}
                        alt="Support Konjer today!"
                        width={600}
                        height={300}
                    />

                    <h1 className={styles.title}>
                        Support Konjer and bring books alive!
                    </h1>
                    <p className={styles.description}>
                        I have partnered with Konjer, a new startup from <a href="https://www.linkedin.com/in/momin-kaleem/">MO</a> to help bring books alive through artificial intelligence. You can support Konjer by <a href="https://www.konjer.xyz/">checking out their website!</a>
                    </p>
                    <h2 className={styles.subtitle}>
                        What so cool about Konjer?
                    </h2>
                    <p className={styles.description}>
                        Go check out the books at <a href="https://portal.konjer.xyz/">portal.konjer.xyz</a> and see for yourself! Each book has a unique experience, and you can ask it any question you want. It is like having someone who has studied the book for their entire life, and they are ready to answer any question you have.
                    </p>
                    <KonjerAffiliate />
                </div>
            </main>
        </div>
    );
}
