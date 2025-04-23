// components/Projects.tsx
import styles from "./AboutMe.module.scss";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Metadata } from "next";
import TopBar from "@/components/topBar/TopBar";
import Contact from "@/components/contact/Contact";
import NavBar from "@/components/navBar/NavBar";

interface AboutMe {
  params: {
    lng: string;
  };
}

export async function generateMetadata({ params }: AboutMe): Promise<Metadata> {
  return {
    title: `About Me`,
  };
}

export default async function AboutMe({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <TopBar />
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
        <div id="contact" className={styles.contact}>
          <h2 className={styles.b}>{t("contact.title")}</h2>{" "}
          <Contact lng={lng} />
        </div>
      </div>
      <NavBar lng={lng} />
    </>
  );
}
