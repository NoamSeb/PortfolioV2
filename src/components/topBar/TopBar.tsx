import styles from "./topBar.module.scss";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div>
        <Link href="./">
          <img src="./ns-logo.svg" alt="go home" />
        </Link>
        <label className={styles.container}>
          <input checked={true} type="checkbox" />
          <img src="./sun.svg" alt="" className={styles.sun} />
          <img src="./moon.svg" alt="" className={styles.moon} />
        </label>
        <p>EN | FR</p>
      </div>
    </div>
  );
}
