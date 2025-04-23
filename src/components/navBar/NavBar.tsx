import style from "./navBar.module.scss";
import Link from "next/link";
import { useTranslation } from "../../app/i18n";

interface NavProps {
  lng: string;
}

export default async function NavBar({ lng }: NavProps) {
  const { t } = await useTranslation(lng);

  return (
    <nav className={style.navBar}>
      <div className={style.desktop}>
        <ul>
          <li>
            <Link href={`/${lng}/GameProjects`}>{t("navBar.GameProject")}</Link>
          </li>
          <li>
            <Link href={`/${lng}/OtherProjects`}>{t("navBar.OtherProject")}</Link>
          </li>
          <li>
            <Link href={`/${lng}/Recommandations`}>{t("navBar.testimonials")}</Link>
          </li>
          <li>
            <Link href={`/${lng}/AboutMe`}>{t("navBar.aboutMe")}</Link>
          </li>
        </ul>
      </div>
      <div className={style.responsivNavBar}>
        <label htmlFor="toggleNav" className={style.burgerMenu}>
          <span></span>
        </label>
        <input type="checkbox" id="toggleNav" className={style.toggleNav} />
        <ul className={`${style.showNav} ${style.b}`}>
          <li>
            <Link href="#whoAmI">{t("navBar.whoAmI")}</Link>
          </li>
          <li>
            <Link href="#whatIDO">{t("navBar.whatIDO")}</Link>
          </li>
          <li>
            <Link href="#testimonials">{t("navBar.testimonials")}</Link>
          </li>
          <li>
            <Link href="#contact">{t("navBar.contact")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
