import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Jan",
      Active: 3000,
    },
    {
      name: "Feb",
      Active: 4000,
    },
    {
      name: "Mar",
      Active: 3000,
    },
    {
      name: "Apr",
      Active: 2000,
    },
    {
      name: "May",
      Active: 1000,
    },
    {
      name: "Jun",
      Active: 4000,
    },
    {
      name: "Jul",
      Active: 2000,
    },
    {
      name: "Agu",
      Active: 3000,
    },
    {
      name: "Sep",
      Active: 4000,
    },
    {
      name: "Oct",
      Active: 1000,
    },
    {
      name: "Nov",
      Active: 4000,
    },
    {
      name: "Dec",
      Active: 2000,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
