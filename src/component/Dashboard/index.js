import React, { useState } from "react";
import styles from "./style.module.css";
import Navbar from "../Navbar/index";
import Graph from "../EnablementGraph/index";
import WeeklyRevenue from "../images/Weekly-revenue.svg";
import Footer from "../Footer/index";

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
            <img src={WeeklyRevenue} />
          </div>

          {/* dashbord  dic start*/}
          <div className={styles.MainTraffic}>
            <div className={styles.trafficDiv}>
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
            </div>
            <div className={styles.trafficDiv}>
              <div className={styles.trafficMain}>
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
              </div>
             
              <div className={styles.chartsvg}>
                <img src="/Pie-chart.svg" />
              </div>
            </div>
          </div>
          <div className={styles.tableMain}>
            <div className={styles.tableTittle}>
              <h2>Check table</h2>
              <div>
                <img src="/More-icon.svg" />
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>PROGRESS</th>
                    <th>QUANTITY</th>
                    <th>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" /> <span>Horizon UI PRO</span>
                    </td>
                    <td>17.5%</td>
                    <td>2.458</td>
                    <td>24.Ja</td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <input
                          type="checkbox"
                          className={styles.checked}
                          checked
                          readOnly
                        />{" "}
                        <span>Horizon UI Free</span>
                      </div>
                    </td>
                    <td>10.8%</td>
                    <td>1.465</td>
                    <td>22.Jun</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        className={styles.checked}
                        checked
                        readOnly
                      />{" "}
                      <spn>Weekly Update</spn>
                    </td>
                    <td>21.3%</td>
                    <td>2.965</td>
                    <td>22.Ju</td>
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
