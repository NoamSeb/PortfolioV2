import styles from "./topBar.module.scss";
import Link from "next/link";
import Logo from "../logo/Logo";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div>
        <Link href="./">
          <div className={styles.logoLink}>
            <Logo />
          </div>
        </Link>
        <label className={styles.container}>
          <input checked={true} type="checkbox" />
          <img src="./sun.svg" alt="" className={styles.sun} />
          <img src="./moon.svg" alt="" className={styles.moon} />
        </label>
        <p>
          <Link href="./en">EN</Link> | <Link href="./fr">FR</Link>
        </p>
      </div>
    </div>
  );
}
