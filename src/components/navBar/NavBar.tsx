import style from "./navBar.module.scss";
import Link from "next/link";
import { useTranslation } from "../../app/i18n";

export default async function NavBar({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <nav className={style.navBar}>
      <ul>
        <Link href="#whoAmI">
          <li>{t("navBar.whoAmI")}</li>
        </Link>
        <Link href="#whatIDO">
          <li>{t("navBar.whatIDO")}</li>
        </Link>
        <Link href="#testimonials">
          <li>{t("navBar.testimonials")}</li>
        </Link>
        <Link href="#contact">
          <li>{t("navBar.contact")}</li>
        </Link>
      </ul>

      {/* <input
        hidden
        className={style.checkIcon}
        id="check-icon"
        name="check-icon"
        type="checkbox"
      />
      <label className={style.iconMenu} htmlFor="check-icon">
        <div className={`${style.bar}, ${style.bar1}`}></div>
        <div className={`${style.bar}, ${style.bar2}`}></div>
        <div className={`${style.bar}, ${style.bar3}`}></div>
      </label> */}
    </nav>
  );
}
