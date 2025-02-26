import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./PieChartComponent.css";

const chartData = {
  monthly: [
    { name: "Team sales", value: 63, color: "#25ABE5" },
    { name: "My sales", value: 25, color: "#481DFF" },
    { name: "Other", value: 12, color: "#EAEFF4" },
  ],
  weekly: [
    { name: "Team sales", value: 70, color: "#25ABE5" },
    { name: "My sales", value: 20, color: "#481DFF" },
    { name: "Other", value: 10, color: "#EAEFF4" },
  ],
  daily: [
    { name: "Team sales", value: 50, color: "#25ABE5" },
    { name: "My sales", value: 40, color: "#481DFF" },
    { name: "Other", value: 10, color: "#EAEFF4" },
  ],
};

const PieChartComponent = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  return (
    <div className="pie-chart-container">
      {/* Header */}
      <div className="header">
        <h3>Average</h3>
        <select
          className="dropdown"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={chartData[selectedOption]}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            dataKey="value"
            stroke="none"
          >
            {chartData[selectedOption].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="legend">
        {chartData[selectedOption].slice(0, 2).map((entry, index) => (
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
