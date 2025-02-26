import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FiBarChart2 } from "react-icons/fi";
import "./WeeklyRevenue.css"; // Import the CSS file

const data = [
  { day: 17, "My Sales": 30, "Team Sales": 38, Total: 100 },
  { day: 18, "My Sales": 32, "Team Sales": 29, Total: 100 },
  { day: 19, "My Sales": 35, "Team Sales": 25, Total: 100 },
  { day: 20, "My Sales": 33, "Team Sales": 34, Total: 100 },
  { day: 21, "My Sales": 29, "Team Sales": 30, Total: 100 },
  { day: 22, "My Sales": 30, "Team Sales": 43, Total: 100 },
  { day: 23, "My Sales": 31, "Team Sales": 42, Total: 100 },
  { day: 24, "My Sales": 32, "Team Sales": 35, Total: 100 },
  { day: 25, "My Sales": 34, "Team Sales": 25, Total: 100 },
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
          <Bar dataKey="Total" fill="#E0E0E0" barSize={10} radius={[5, 5, 5, 5]} />

          {/* Stacked Colored Bars */}
          <Bar dataKey="My Sales" stackId="a" fill="#481DFF" barSize={10} radius={[0, 0, 0, 0]} />
          <Bar dataKey="Team Sales" stackId="a" fill="#25ABE5" barSize={10} radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default WeeklyRevenue;
