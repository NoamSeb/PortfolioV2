import styles from "./contact.module.scss";
import { useTranslation } from "../../app/i18n";

interface ContactProps {
  lng: string;
}
export default async function Contact({ lng }: ContactProps) {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.contact}>
      <p>{t("contact.subTitle")}</p>
      <p>
        If you have any questions, please feel free to contact me by mail or, on
        LinkedIn
      </p>
      <a href="./CV_nsebahoun.pdf" download="noam_sebahoun_CV">
        {t("contact.CV")}
      </a>
    </div>
  );
}
