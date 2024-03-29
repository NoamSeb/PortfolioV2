import styles from "./page.module.scss";
import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

export default function Home({ params: { lng } }) {
  // const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header>
        <TopBar />
      </header>
      <NavBar />
      <main>
        <div className={styles.titleSection}>
          <h1>
            {/* <span className={styles.r}>{t("myName")}</span> */}
            <br></br>
            {/* <span className={styles.b}>{t("mySurname")}</span> */}
          </h1>
        </div>
        <div id="whoAmI">
          {/* <h2 className={styles.b}>{t("whoAmI")}</h2>{" "} */}
          <div>{/* <p>{t("lorem")}</p> <img src="" alt="" /> */}</div>
        </div>
      </main>
    </div>
  );
}
