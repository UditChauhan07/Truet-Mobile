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
          <div className={styles.container} onClick={() => navigate("/truet-ai")}>
            <div className={styles.bubble}>
              <div className={styles.micIcon}><img src='svg/mic-icon.svg' /></div>

            </div>
          </div>
          {/* <div className={styles.faHome} onClick={() => navigate("/truet-ai")} >
            <img src="/AI-MIC.svg" alt="Mic" />
          </div> */}
        </div>



      </div>
    </div>
  );
};

export default Index;
