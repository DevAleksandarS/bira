import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function ChartLine() {
  return (
    <div className="chart" style={{ width: "100%" }}>
      <Line
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "2018",
              data: [65, 59, 0, 81, 56, 55, 40, 25, 100, 45, 27, 74, 55, 42],
            },
            {
              label: "2019",
              data: [25, 100, 45, 27, 74, 55, 42, 65, 59, 0, 81, 56, 55, 40],
            },
          ],
        }}
      />
    </div>
  );
}
