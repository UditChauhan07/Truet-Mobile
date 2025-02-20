import React from "react";
import PolyLogo from "../images/Polyglass-Logo.png";
import language from "../images/languagePoly.svg";
import Profile from "../images/ProfileImg.png";
import Menubar from "../images/menubar.svg";
import FilterIcom from "../images/FilterIcom.svg";
import styles from "./style.module.css";


function Navbar() {
  return (
    <div className={styles.HeaderTop}>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={PolyLogo} />
        </div>

        <div className={styles.sidebar}>
          <div className={styles.language}>
            <img src={language} />
          </div>

          <div className={styles.Profile}>
            <img src={Profile} />
          </div>

          <div className={styles.MenuBar}>
            <img src={Menubar} />
          </div>
        </div>
      </nav>

      <div className={styles.searchbar}>
        <div className={styles.searchinput}>
          <input type="text" placeholder="Search here" />
        </div>
        <div className={styles.filterIcon}>
          <img src={FilterIcom} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
