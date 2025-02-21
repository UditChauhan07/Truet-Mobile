import React from "react";
import PolyLogo from "../images/Polyglass-Logo.png";
import language from "../images/languagePoly.svg";
import Profile from "../images/ProfileImg.png";
import Menubar from "../images/menubar.svg";
import FilterIcom from "../images/FilterIcom.svg";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "bootstrap";


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

          <div className={styles.MenuBar} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >
            <img src={Menubar} />
          </div>
        </div>
      </nav>

<div id="offCANVAS">
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className={styles.menuTittle}>Menu</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className={styles.menuDiv}>
            <div className={styles.MenuS}>
              <div>
                <img src="svg/person.svg" alt="" />
              </div>
              <div className={styles.crm}><p>Access CRM</p></div>
            </div>
            <div className={styles.learning}>
              <div className={styles.learningIcon}>
                <img src="svg/learning.svg" alt="" />
              </div>
              <div className={styles.learn}>
                <p>My Learnings</p>

              </div>
            </div>
            <div className={styles.learning}>
              <div className={styles.learningIcon}>
                <img src="svg/notification.svg" alt="" />
              </div>
              <div className={styles.notificationDiv}>
                <div className={styles.learn}>
                  <p>Notification</p>
                </div>
                <div>
                  <img src="svg/notifi-number.svg" alt="" />
                </div>
              </div>
            </div>
            <div className={styles.learning}>
              <div className={styles.learningIcon}>
                <img src="svg/setting.svg" alt="" />
              </div>
              <div className={styles.learn}>
                <p>Settings</p>

              </div>

            </div>
            <div className={styles.ProfileDiv}>
            <div className={styles.profile}>
                <h5 className={styles.profileTittle}>Profile</h5>
              </div>
              <div className={styles.profilePerson}>
                <div className={styles.Dp}>
                  <img src="images/dp.png" alt=""/>
                </div>
                <div>
                  <p className={styles.personName}>Jenny Wilson</p>
                  <a className={styles.email} href="">jen.wilson@example.com</a>
                </div>

              </div>
              <div className={styles.logOutMain}>
              <div className={styles.logOutDiv} >
                <div>
                  <img src="svg/Left-icon.svg" alt=""/>
                </div>
                <div>
                  <p className={styles.logout}>Log out</p>
                </div>

              </div>
              </div>
              <hr/>
          </div>
          </div>
        </div>
      </div>
      </div>
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
