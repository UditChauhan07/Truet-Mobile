import React from "react";
import PolyLogo from "../images/Polyglass-Logo.png";
import language from "../images/languagePoly.svg";
import Profile from "../images/ProfileImg.png";
import Menubar from "../images/menubar.svg";
import FilterIcom from "../images/FilterIcom.svg";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "bootstrap";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate(); 

  // Logout function
  const handleLogout = () => {
    navigate("/"); 
    window.location.reload();
  };
  return (
    <div className={styles.HeaderTop}>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={PolyLogo} />
        </div>

        <div className={styles.sidebar}>
          <div className={styles.language}>
            <img src={language}/>
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
                    <img src="images/dp.png" alt="" />
                  </div>
                  <div>
                    <p className={styles.personName}>Jenny Wilson</p>
                    <a className={styles.email} href="">jen.wilson@example.com</a>
                  </div>

                </div>
                <div className={styles.logOutMain} onClick={handleLogout}>
                  <div className={styles.logOutDiv} >
                    <div>
                      <img src="svg/Left-icon.svg" alt="" />
                    </div>
                    <div>
                      <p className={styles.logout}>Log out</p>
                    </div>

                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.searchinput}>
          <input type="text" placeholder="Search here" />
        </div>
        <div className={styles.filterIcon} data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom1" aria-controls="offcanvasBottom1" >
          <img src={FilterIcom} />
        </div>
       
      </div>
       {/* Filler  bootom Canvas*/}
       <div id="FiltterCANVA">
          <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom1" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
              {/* <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5> */}
              {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
            </div>
            <div class="offcanvas-body small">
              <div className={styles.filterMain}>
                <div className={styles.FlterTittle}>
                  <h2>Filter</h2>
                  <div>
                    <div className={styles.checkDiv} id="filterCheck">
                      <div><p>Daily Traffic</p></div>
                      <div>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                    </div>
                    <div className={styles.checkDiv} id="filterCheck">
                      <div><p>Pie Chart</p></div>
                      <div>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                    </div>
                    <div className={styles.checkDiv} id="filterCheck">
                      <div><p>Weekly Revenue</p></div>
                      <div>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                    </div>
                    <div className={styles.checkDiv} id="filterCheck">
                      <div><p>Total Spent</p></div>
                      <div>  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></div>
                    </div>
                  </div>

                  <div className={styles.BothBtn}>
                    <div className={styles.showBtn}>
                      <p>Show</p>
                    </div>
                    <div className={styles.closeBtn} aria-label="Close" data-bs-dismiss="offcanvas">
                      <p>Close</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
