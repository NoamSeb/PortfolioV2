import styles from "./page.module.scss";
import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <TopBar />
      </header>
      <NavBar />
      <main>
        <div className={styles.titleSection}>
          <h1>
            <span className={styles.r}>Noam</span>
            <br></br>
            <span className={styles.b}>Sebahoun</span>
          </h1>
        </div>
        <div id="whoAmI">
          <h2 className={styles.b}>Who Am I ?</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              consectetur sapiente, in corrupti fugiat aut fugit rem doloribus
              ducimus illum voluptatibus blanditiis eius, ut minus nam est
              exercitationem similique tempora!
            </p>
            <img src="" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
