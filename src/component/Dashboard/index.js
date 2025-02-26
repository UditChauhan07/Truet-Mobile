import React, { useState , useEffect } from "react";
import styles from "./style.module.css";
import Navbar from "../Navbar/index";
import Graph from "../EnablementGraph/index";
// import WeeklyRevenue from "../images/Weekly-revenue.svg";
import WeeklyRevenue from "../chartAndGraphs/WeeklyRevenue";
import DailyTraffic from "../chartAndGraphs/DailyTraffic";
import Footer from "../Footer/index";
import PieChartComponent from "../chartAndGraphs/pieChart"

const Index = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

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
            {/* <img src={WeeklyRevenue} /> */}
            <WeeklyRevenue />
          </div>

          {/* dashbord  dic start*/}
          <div className={styles.MainTraffic}>
<DailyTraffic></DailyTraffic>

            {/* <div className={styles.trafficDiv}>
              <div className={styles.trafficMain}>
                <div className={styles.trafficTittle}>
                  <h2>Daily Traffic</h2>
                </div>
                <div className={styles.trafficGrow}>
                  <img src="/arrow_drop_up.svg" />
                  <p>+2.45%</p>
                </div>
              </div>
              <div className={styles.visitors}>
                <h1>2.579</h1> <span>Visitors</span>
              </div>
              <div className={styles.chartsvg}>
                <img src="/chart.svg" />
              </div>
            </div> */}
            <div className={styles.trafficDiv}>

              <PieChartComponent></PieChartComponent>
              {/* <div className={styles.trafficMain}>
                <div className={styles.trafficTittle}>
                  <h2>Pie Chart</h2>
                </div>
                <div className={styles.dropdown}>
                  <button
                    className={styles.dropdownButton}
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    <p className={styles.mobth}>Monthly</p>
                  </button>
                  {isOpen2 && (
                    <div className={styles.dropdownMenu}>
                      {options.map((option) => (
                        <div key={option} onClick={() => setIsOpen2(false)}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}
             
              {/* <div className={styles.chartsvg2}>
                <img src="/Pie-chart.svg" />
              </div> */}
            </div>
          </div>
          <div className={styles.tableMain}>
            <div className={styles.tableTittle}>
              <h2>Top Chart Sales Reps</h2>
              <div>
                <img src="/More-icon.svg" />
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.Headingtable}>
                    <th>Name</th>
                    <th>Target</th>
                    <th>Amount</th>
                    <th>Diff</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                      <span>Paula Cramer</span>
                    </td>
                    <td>$123.43k</td>
                    <td>$456.32k</td>
                    <td>$190.06k</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Jessica Lanue</span>
                    </td>
                    <td>$140.83k</td>
                    <td>$377.91k</td>
                    <td>$857.95k</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Jasmine kim</span>
                    </td>
                    <td>$102.85k</td>
                    <td>$866.31k</td>
                    <td>$132.87k</td>
                  </tr>

                  <tr>
                    <td>
                      <span>Kate Block</span>
                    </td>
                    <td>$73.43k</td>
                    <td>$287.31k</td>
                    <td>$672.86k</td>
                  </tr>

                  <tr>
                    <td>
                      <span>Kim Logan</span>
                    </td>
                    <td>$93.43k</td>
                    <td>$266.31k</td>
                    <td>$172.86k</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={` ${styles.tableMain} ${styles.tableMain1}`}>
            <div className={styles.tableTittle}>
              <h2>Top Chart Product</h2>
              <div>
                <img src="/More-icon.svg" />
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr className={styles.Headingtable}>
                    <th>Name</th>
                    <th>Target</th>
                    <th>Amount</th>
                    <th>Diff</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>Jasmine kim</span>
                    </td>
                    <td>$93.43k</td>
                    <td>$266.31k</td>
                    <td>$172.86k</td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        
                        <span>Allison Kauffman</span>
                      </div>
                    </td>
                    <td>$0.00k</td>
                    <td>$170.31k</td>
                    <td>$110.86k</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <span>Paula Cramer</span>
                    </td>
                    <td>$267.45k</td>
                    <td>$378.55k</td>
                    <td>$110.88k</td>
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <span>Kim Logan</span>
                    </td>
                    <td>$93.45k</td>
                    <td>$266.31k</td>
                    <td>$172.86k</td>
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <span>Jonny Brew</span>
                    </td>
                    <td>$00.00k</td>
                    <td>$436.59K</td>
                    <td>$120.36K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Index;
