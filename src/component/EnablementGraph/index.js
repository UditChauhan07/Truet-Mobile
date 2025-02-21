import React from "react";
import styles from './Style.module.css'
import Bardesign from '../images/bardesign.svg'
import CalanderIcon from '../images/calanderIcon.svg' 

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "SEP", value1: 50, value2: 40 },
  { month: "OCT", value1: 60, value2: 50 },
  { month: "NOV", value1: 80, value2: 60 },
  { month: "DEC", value1: 65, value2: 55 },
  { month: "JAN", value1: 90, value2: 70 },
  { month: "FEB", value1: 85, value2: 75 },
];

const Graph = () => {
  return (
    <div className={styles.graph}>
      {/* Header Section */}
      <div className={styles.flexSo}>
      <div className={styles.graphDetail}>
        <div>
          <h2 className={styles.graphPrice}>$37.5K</h2>
          <p className={styles.TotalSpent}>Total Spent</p>
        </div>
        <p className={styles.growthPercent}>+2.45%</p>
      </div>

      {/* Dropdown and Chart Button */}
      <div className={styles.charContro}>
        <button className={styles.dateStyl}>
        <img  src={CalanderIcon}/>
          This month
        </button>

        <button className ={styles.BarDesign}>
            <img src={Bardesign}/>
                  </button>
      </div>
      </div>

      {/* Graph Section */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#bbb" />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Line type="monotone" dataKey="value1" stroke="#4c3cff" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="value2" stroke="#63c7ff" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Status */}
      <p className={styles.Ontrack}><span><img src="svg/track-icon.svg" alt=""/></span>  On Track</p>
    </div>
  );
};

export default Graph;
