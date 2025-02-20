import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.footerBottom}>
      <div class="bottom-nav">
        <div class="nav-item active">
          <i class="fas fa-home"></i>
          <span>Dashboard</span>
        </div>
        <div class="nav-item">
          <i class="fas fa-th-large"></i>
          <span>Library</span>
        </div>
        <div class="nav-item">
          <i class="fas fa-chart-bar"></i>
          <span>Analytics</span>
        </div>
        <div class="mic-button">
          <i class="fas fa-microphone"></i>
        </div>
      </div>
    </div>
  );
};

export default Index;
