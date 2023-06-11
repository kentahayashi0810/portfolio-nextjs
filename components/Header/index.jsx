import styles from "@/components/Header/Header.module.css";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}></div>
        <div
          className={`${styles.header__bg} ${
            navOpen ? ` ${styles.active}` : ""
          }`}
          onClick={toggleNav}
        ></div>
        <nav
          className={`${styles.header__globalNav} ${
            navOpen ? `${styles.active}` : ""
          }`}
        >
          <ul className={styles.header__list}>
            <Scroll
              className={styles.hoverLink}
              to="frontAbout"
              smooth={true}
              duration={2000}
            >
              <li className={styles.header__listItem}>ABOUT</li>
            </Scroll>

            <Scroll
              className={styles.hoverLink}
              to="frontWorks"
              smooth={true}
              duration={2000}
            >
              <li className={styles.header__listItem}>WORKS</li>
            </Scroll>
            <Scroll
              className={styles.hoverLink}
              to="frontContact"
              smooth={true}
              duration={2000}
            >
              <li className={styles.header__listItem}>CONTACT</li>
            </Scroll>

            <div className={styles.header__language}>
              <a href="https://kentahayashi.sakura.ne.jp/portfolio/">
                <figure className={styles.header__languageIcon}>
                  <img src="common/header_language_1.png" alt="English" />
                </figure>
              </a>
              <a href="https://kentahayashi.sakura.ne.jp/portfolio/ja/">
                <figure className={styles.header__languageIcon}>
                  <img src="common/header_language_2.png" alt="日本語" />
                </figure>
              </a>
            </div>
          </ul>
        </nav>
      </div>

      <button
        className={`${styles.header__hamburger} ${styles.spOnly} ${
          navOpen ? ` ${styles.active}` : ""
        }`}
        onClick={toggleNav}
      >
        <span className={styles.header__hamburgerLine}></span>
        <span className={styles.header__hamburgerLine}></span>
        <span className={styles.header__hamburgerLine}></span>
      </button>
    </header>
  );
}
