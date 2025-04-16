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
        <div id="whoAmI" className={styles.whoAmI}>
          <h2 className={styles.b}>{t("whoAmI.title")}</h2>{" "}
          <div>
            {[1, 2, 3, 4].map((i) => (
              <p className={styles.r}>{t("whoAmI.content" + i + "")}</p>
            ))}
            <img src="" alt="" />
          </div>
          <div className={styles.opquastCertif}>
            <h3 className={styles.b}>{t("whoAmI.opquast.title")}</h3>
            <div className={styles.opquastCertifContent}>
              <img src="logo_opquast.png" alt="opquast logo" />
              <p className={styles.r}>{t("whoAmI.opquast.content")}</p>
            </div>
          </div>
        </div>
        <div id="whatIDO" className={styles.whatIDO}>
          <h2 className={styles.b}>{t("whatIDO.title")}</h2>{" "}
          <Projects lng={lng} />
        </div>
        <div id="testimonials" className={styles.testimonials}>
          <h2 className={styles.b}>{t("testimonials.title")}</h2>{" "}
          <Testimonials lng={lng} />
        </div>
        <div id="contact" className={styles.contact}>
          <h2 className={styles.b}>{t("contact.title")}</h2>{" "}
          <Contact lng={lng} />
        </div>
      </main>
    </>
  );
}
