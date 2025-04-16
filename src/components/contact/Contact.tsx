import styles from "./contact.module.scss";
import { useTranslation } from "../../app/i18n";

interface ContactProps {
  lng: string;
}
export default async function Contact({ lng }: ContactProps) {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.contact}>
      <p className={styles.r}>{t("contact.subTitle")}</p>
      <p className={styles.r}>{t("contact.subTitle2")}</p>
      <div className={styles.contactLinks}>
        <a
          href="./CV_nsebahoun.pdf"
          download="noam_sebahoun_CV"
          className={`${styles.b} ${styles.downloadCV}`}
        >
          {t("contact.CV")}
        </a>
        <div className={styles.socials}>
          <a href="mailto:noam.sebahoun@gmail.com" aria-label="Me contacter par mail">
            <img src="email.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/noam-sebahoun-03a79a206/" aria-label="Voir ma page LinkedIn">
            <img src="linkedin.png" alt="" />
          </a>
          <a href="https://noamseb.itch.io/" aria-label="Voir ma page Itch.io">
            <img src="itchLogo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
