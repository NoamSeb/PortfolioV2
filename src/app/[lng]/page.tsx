import { useTranslation } from "../i18n";
import Head from "next/head";
import { Metadata } from 'next';
import styles from "./page.module.scss";
import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";

interface PageProps {
  lng: string;
}

export const metadata: Metadata = {
  title: 'Portfolio | Noam Sebahoun',
  description:
    'Welcome to my online portfolio. Explore my projects, discover my skills in web and game programming, and get in touch for collaboration opportunities.',
};

export default async function Page({ params: { lng } }: { params: PageProps }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <header>
        <TopBar />
      </header>
      <NavBar lng={lng} />
      <main>
        <div className={styles.titleSection}>
          <div>
            <h1>
              <span className={styles.r}>{t("myName")}</span>
              <br></br>
              <span className={styles.b}>{t("mySurname")}</span>
            </h1>
            <p className={`${styles.b} ${styles.status}`}>{t("status")}</p>
          </div>
          <img src="/face-picture.webp" alt="" />
        </div>
        <div id="whatIDO" className={styles.whatIDO}>
          <h2 className={styles.b}>{t("whatIDO.title")}</h2>{" "}
          <Projects lng={lng} />
        </div>
      </main>
    </>
  );
}
