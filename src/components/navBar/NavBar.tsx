import style from "./navBar.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={style.navBar}>
      <ul>
        <Link href="#whoAmI">
          <li>Who Am I ?</li>
        </Link>
        <Link href="#whatIDO">
          <li>What do I do ?</li>
        </Link>
        <Link href="#testimonials">
          <li>Testimonials</li>
        </Link>
        <Link href="#contact">
          <li>Contact</li>
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
