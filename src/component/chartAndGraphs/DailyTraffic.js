import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./DailyTraffic.css";

const data = [
  { day: "1", visitors: 500 },
  { day: "2", visitors: 700 },
  { day: "3", visitors: 1200 },
  { day: "4", visitors: 900 },
  { day: "5", visitors: 1100 },
  { day: "6", visitors: 1000 },
  { day: "7", visitors: 400 },
];

const DailyTraffic = () => {
  return (
    <div className="daily-traffic-container">
      {/* Header */}
      <div className="daily-traffic-header">
        <h3>Daily Leads</h3>
        <span className="growth">▲+2.45%</span>
      </div>

      {/* Visitor Count */}
      <div className="visitor-count">
        <span className="count">2,579</span>
        <span className="text"> Visitors</span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={105}>
        <BarChart data={data} barGap={8}>
          <XAxis dataKey="day" stroke="" />
          <Tooltip />

          {/* Gradient Bar */}
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A2AFE" stopOpacity={1} />
              <stop offset="100%" stopColor="#4A2AFE" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Bar dataKey="visitors" fill="url(#gradientColor)" barSize={7} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyTraffic;
