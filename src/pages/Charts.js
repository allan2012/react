import React from 'react';
import AppLayout from "../layouts/AppLayout";
import { Chart } from "react-google-charts";

export const data = [
  ["Program", "2021 Graduate", "2022 Graduate"],
  ["Computer Science", 23, 55],
  ["Business Adminstration", 234, 300],
  ["Pharmacy", 23, 15]
];

export const options = {
  title: "Graduate count in Pretoria University",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Graduate Count",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export const data2 = [
  ["Program", "Graduate Count"],
  ["Computer Science", 41],
  ["Business Admistration", 122],
  ["Media Studies", 12],
  ["Education Science", 132],
  ["Law", 77], // CSS-style declaration
];

export const data2options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export default function Charts() {

  return (
    <AppLayout title="💹 Charts & Graphs">
      <div className="row">
        <div className="col-4">
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
        <div className="col-4">
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data2}
            options={data2options}
          />
        </div>
        <div className="col-4">
          Documentaion: <a href="https://www.react-google-charts.com/">React google charts</a>
        </div>
      </div>
    </AppLayout>
  )
}
