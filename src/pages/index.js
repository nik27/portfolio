import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import styles from "../styles/Home.module.css";
import Hero from "../sections/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nik27 | Portfolio</title>
        <meta name="description" content="nik27 portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileNav />
      <Box
        d="flex"
        flexFlow="column nowrap"
        pl={{ base: "0", xl: "25%", "2xl": "20%" }}
      >
        <Box h="100vh" bgGradient="linear(to-t, #fff, blue.50)">
          <DesktopNav />
          <Hero />
        </Box>
        <footer className={styles.footer}>Footer</footer>
      </Box>
    </div>
  );
}
