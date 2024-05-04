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
      </ul
    </nav>
  );
}
