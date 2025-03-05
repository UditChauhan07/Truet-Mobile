import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Navbar from "../Navbar/index";
import Graph from "../EnablementGraph/index";
// import WeeklyRevenue from "../images/Weekly-revenue.svg";
import WeeklyRevenue from "../chartAndGraphs/WeeklyRevenue";
import DailyTraffic from "../chartAndGraphs/DailyTraffic";
import Footer from "../Footer/index";
import PieChartComponent from "../chartAndGraphs/pieChart"
import SalesRep from "./SalesRep";
import TeamMembers from '../../component/TeamMembers/TeamMembers'
import Opportunities from '../../component/Opportunities/Opportunities'
import ChartProduct from '../../component/Dashboard/ChartProduct'


const Index = () => {
  const [filters, setFilters] = useState(() => {
    return JSON.parse(localStorage.getItem("dashboardfilters")) || {};
  });
  useEffect(() => {
    // Function to update state when localStorage changes
    const updateFilters = () => {
      const updatedFilters = JSON.parse(localStorage.getItem("dashboardfilters")) || {};
      setFilters(updatedFilters);
    };

    // Listen for "storage" event (cross-tab updates)
    window.addEventListener("storage", updateFilters);

    // Polling method for same-tab updates
    const interval = setInterval(() => {
      updateFilters();
    }, 100); // Check every 1 second

    // Cleanup
    return () => {
      window.removeEventListener("storage", updateFilters);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {

    if (!window.location.href.includes("reloaded")) {
      window.location.replace(window.location.href + "?reloaded=true");
    }
  }, []);




  return (
    <div className={styles.p1}>
      <div className={styles.container}>
        <Navbar></Navbar>

        <div className={styles.EnabledDash}>
          <h3>Enablement Dashboard</h3>

          {filters.salestrack ? <div className={styles.grapBga}>
            <Graph />
          </div>
            : null}

          <div className={styles.WeeklyRevenue}>
            {filters.weekly ?
              <WeeklyRevenue />
              : null}
          </div>


          {/* dashbord  div start*/}
          {filters.charts ?
            <div className={styles.MainTraffic}>
              <DailyTraffic></DailyTraffic>
              <div className={styles.trafficDiv}>
                <PieChartComponent></PieChartComponent>
              </div>
            </div>
            : null}

          {filters.salesrap ? <SalesRep /> : null}
          {filters.product ? <ChartProduct /> : null}
          {filters.team_Member ? <TeamMembers /> : null}
          {filters.sales ? <Opportunities /> : null}

        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Index;
