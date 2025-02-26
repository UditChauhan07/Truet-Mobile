import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./PieChartComponent.css";

const data = [
  { name: "Your files", value: 63, color: "#2A2AFE" },
  { name: "System", value: 25, color: "#66CCFF" },
  { name: "Other", value: 12, color: "#EAEFF4" }, // Light grey
];

const PieChartComponent = () => {
  return (
    <div className="pie-chart-container">
      {/* Header */}
      <div className="header">
        <h3>Pie Chart</h3>
        <select className="dropdown">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="legend">
        {data.slice(0, 2).map((entry, index) => (
          <div key={index} className="legend-item">
            <span className="legend-color" style={{ background: entry.color }}></span>
            <span className="legend-text">{entry.name}</span>
            <span className="legend-value">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
