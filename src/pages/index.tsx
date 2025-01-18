import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>nik27 | portfolio</title>
        <meta name="description" content="nik27 Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles['empty-icon-container']}>
            <div className={styles["animation-container"]}>
              <Image
                className={`${styles.logo} ${styles.bounce}`}
                src="/tumbleweed.png"
                alt="Next.js logo"
                width={100}
                height={100}
                priority
              />
              <div className={styles.pebble1}></div>
              <div className={styles.pebble2}></div>
              <div className={styles.pebble3}></div>
            </div>
            <div className={styles.info}>
              <h1>Nothing to see here... 😔</h1>
              <p>Maybe some day... 😉</p>
            </div>

          </div>
        </main >
        <footer className={styles.footer}>
          <a
            href="https://github.com/nik27"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/nik27"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </footer>
      </div >
    </>
  );
}
