"use client";
import styles from "./topBar.module.scss";
import Link from "next/link";
import Logo from "../logo/Logo";
import { useParams } from "next/navigation";

export default function TopBar() {
  const router = useParams();

  console.log(router);
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
          <Link href={`/en/${router.slug}`}>EN</Link> |{" "}
          <Link href={`/fr/${router.slug}`}>FR</Link>
        </p>
      </div>
    </div>
  );
}
