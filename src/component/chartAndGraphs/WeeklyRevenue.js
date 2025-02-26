import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiBarChart2 } from "react-icons/fi";
import "./WeeklyRevenue.css"; // Import the CSS file

const data = [
  { day: 17, revenue1: 20, revenue2: 28, background: 60 },
  { day: 18, revenue1: 22, revenue2: 19, background: 60 },
  { day: 19, revenue1: 25, revenue2: 15, background: 60 },
  { day: 20, revenue1: 23, revenue2: 24, background: 60 },
  { day: 21, revenue1: 19, revenue2: 30, background: 60 },
  { day: 22, revenue1: 20, revenue2: 33, background: 60 },
  { day: 23, revenue1: 21, revenue2: 22, background: 60 },
  { day: 24, revenue1: 22, revenue2: 25, background: 60 },
  { day: 25, revenue1: 24, revenue2: 15, background: 60 },
];

const WeeklyRevenue = () => {
  return (
    <div className="weekly-revenue-container">
      {/* Header */}
      <div className="weekly-revenue-header">
        <h2 className="weekly-revenue-title">Weekly Revenue</h2>
        <button className="chart-button">
          <FiBarChart2 className="icon-style" />
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={-10}>
          <XAxis dataKey="day" stroke="#bbb" />
          <Tooltip />

          {/* Gray Background Bars */}
          <Bar dataKey="background" fill="#E0E0E0" barSize={10} radius={[5, 5, 5, 5]} />

          {/* Stacked Colored Bars */}
          <Bar dataKey="revenue1" stackId="a" fill="#6D4AFE" barSize={10} radius={[0, 0, 0, 0]} />
          <Bar dataKey="revenue2" stackId="a" fill="#63C7FF" barSize={10} radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyRevenue;
