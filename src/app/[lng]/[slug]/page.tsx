import Link from "next/link";
import { useTranslation } from "../../i18n";
import TopBar from "@/components/topBar/TopBar";
import styles from "./project.module.scss";

export default async function Page({ params: { lng, slug } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>
        <div className={styles.titleSection}>
          <h1 className={styles.b}>{slug}</h1>
        </div>
      </main>
    </>
  );
}
