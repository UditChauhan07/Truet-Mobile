import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.footerBottom}>
      <div className={styles.bottomNav} >
      <div className={styles.tab}>
        <div className={styles.navItem} >
          <i className={styles.faHome} ></i>
          <span  onClick={() => navigate("/dashboard")}>Dashboard</span>
        </div>
        <div className={styles.navItem} >
          <i className={styles.faHome} ></i>
          <span onClick={() => navigate("/library")}>Library</span>
        </div>
        <div className={styles.navItem}>
          <i className={styles.faHome} ></i>
          <span>Analytics</span>
        </div>
        </div>
        <div className={styles.navItem} >
          <div className={styles.faHome} >
            <img src="/AI-MIC.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
