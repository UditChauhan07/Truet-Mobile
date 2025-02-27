import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Navbar from "../Navbar/index";
import Graph from "../EnablementGraph/index";
// import WeeklyRevenue from "../images/Weekly-revenue.svg";
import WeeklyRevenue from "../chartAndGraphs/WeeklyRevenue";
import DailyTraffic from "../chartAndGraphs/DailyTraffic";
import Footer from "../Footer/index";
import PieChartComponent from "../chartAndGraphs/pieChart"
import MobileShare from "./ShareOption"

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
            <div className={styles.trafficDiv}>

              <PieChartComponent></PieChartComponent>

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
                    <th>Sale Target</th>
                    <th> Sale Amount</th>
                    <th>Diff.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>Jasmine Kim</span>
                    </td>
                    <td>$93.45K</td>
                    <td>$266.31K</td>
                    <td>$172.86K</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Allison Kauffman</span>
                    </td>
                    <td>$6.93K</td>
                    <td>$146.61K</td>
                    <td>$139.68K</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Paula Carmer</span>
                    </td>
                    <td>$0.00K</td>
                    <td>$95.34K</td>
                    <td>$95.34K</td>
                  </tr>

                  <tr>
                    <td>
                      <span>Kim Logan</span>
                    </td>
                    <td>$34.79K</td>
                    <td>$135.68K</td>
                    <td>$100.90K</td>
                  </tr>

                  <tr>
                    <td>
                      <span>Kate Block</span>
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
                    <th>Sale Target</th>
                    <th>Sale Amount</th>
                    <th>Diff.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>Jessica Lanoue</span>
                    </td>
                    <td>$196.57K</td>
                    <td>$316.90K</td>
                    <td>$120.33K</td>
                  </tr>
                  <tr>
                    <td>
                      <div>

                        <span>Bruno</span>
                      </div>
                    </td>
                    <td>$0.00K</td>
                    <td>$170.00K</td>
                    <td>$170.00K</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <span>Karla</span>
                    </td>
                    <td>$267.45K</td>
                    <td>$367.45K</td>
                    <td>$100.00K</td>
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <span>Niklas</span>
                    </td>
                    <td>$93.45K</td>
                    <td>$293.45K</td>
                    <td>$200.00K</td>
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <span>Jonny Brew</span>
                    </td>
                    <td>$00.00K</td>
                    <td>$436.59K</td>
                    <td>$436.59K</td>
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
