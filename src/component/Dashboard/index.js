import React from 'react';
import styles from  './style.module.css';
import Navbar from '../Navbar/index';
import Graph from '../EnablementGraph/index';
import WeeklyRevenue from '../images/Weekly-revenue.svg';


const Index = () => {
    return (
        <div className={styles.p1}>
          <div className={styles.container}>
            <Navbar></Navbar>
    
            <div className={styles.EnabledDash}>
              <h3>Enablement Dashboard</h3>
    
              <div className={styles.grapBga}>
                <Graph />
              </div>
    
              <div className={styles.WeeklyRevenue}>
                <img src={WeeklyRevenue} />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Index;
