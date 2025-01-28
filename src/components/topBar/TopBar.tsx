"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./topBar.module.scss";
import Link from "next/link";
import Logo from "../logo/Logo";
import { useParams } from "next/navigation";

export default function TopBar() {
  const router = useParams();
  const slug = router?.slug || "";

  const controls = useAnimation(); // Framer Motion controls
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Avoid running animation before the component is mounted

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide top bar
        controls.start({ y: "-100%", transition: { duration: 0.3, ease: "easeInOut" } });
      } else {
        // Scrolling up, show top bar
        controls.start({ y: "0%", transition: { duration: 0.3, ease: "easeInOut" } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls, isMounted]); // Add isMounted as a dependency to ensure it's checked

  return (
    <motion.div
      className={styles.topBar}
      animate={controls} // Attach Framer Motion animation controls
      initial={{ y: "0%" }} // Initial position
    >
      <div>
        <Link href="./">
          <div className={styles.logoLink}>
            <Logo />
          </div>
        </Link>
        <label className={styles.container}>
          <input checked={true} type="checkbox" />
          <img src="./sun.svg" alt="Sun icon" className={styles.sun} />
          <img src="./moon.svg" alt="Moon icon" className={styles.moon} />
        </label>
        <p>
          <Link href={`/en/${slug}`}>EN</Link> | <Link href={`/fr/${slug}`}>FR</Link>
        </p>
      </div>
    </motion.div>
  );
}
