// filepath: d:\tsxProjext\my-webproject\src\components\layout\Navbar\Navbar.tsx
import Link from "next/link";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.containerNav}>
      <h1 className={style.title}>My Portfolio</h1>
      <ul className={style.navLinks}>
        <li>
          <Link href="/" className={style.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={style.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={style.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}