import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.css";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if the tab is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.footerBottom}>
      <div className={styles.bottomNav}>
        <div className={styles.tab}>
          <div
            className={`${styles.navItem} ${isActive("/home") ? styles.active : ""}`}
            onClick={() => navigate("/home")}
          >
            <i className={styles.faHome}>
              <img
                src="svg/home-icon.svg"
                alt=""
                className={isActive("/home") ? styles.activeSvg : ""}
              />
            </i>
            <span className={isActive("/home") ? styles.activeText : ""}>
              Home
            </span>
          </div>

          <div
            className={`${styles.navItem} ${isActive("/sales") ? styles.active : ""}`}
            onClick={() => navigate("/sales")}
          >
            <i className={styles.faHome}>
              <img
                src="svg/Library-icon.svg"
                alt=""
                className={isActive("/sales") ? styles.activeSvg : ""}
              />
            </i>
            <span className={isActive("/sales") ? styles.activeText : ""}>
            Sales
            </span>
          </div>

          <div
            className={`${styles.navItem} ${isActive("/analytics") ? styles.active : ""}`}

          >
            <i className={styles.faHome}>
              <img
                src="svg/Analytics-icon.svg"
                alt=""
                className={isActive("/analytics") ? styles.activeSvg : ""}
              />
            </i>
            <span className={isActive("/analytics") ? styles.activeText : ""}>
              Analytics
            </span>
          </div>
        </div>

        <div className={styles.navItem}>
          <div className={styles.faHome} >
            <img src="/AI-MIC.svg" alt="Mic" />
          </div>
        </div>

        <div id="footerCANVA">
          <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
              {/* <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5> */}
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
              <div className={styles.logo}>
                <img src="svg/Truet-Icon.svg" alt="" />
                <p>Get quick answers to any questions from the <a href="">Organization Library</a></p>

              </div>

              <div className={styles.radiationDiv}>
                <img src="images/radiation-Img.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
