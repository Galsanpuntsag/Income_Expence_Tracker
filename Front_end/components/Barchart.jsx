import React, { useContext } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const { barChartData, getChartData } = useContext(TransactionContext);

  const data1 = {
    labels: barChartData?.labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#85CC16",
        data: barChartData?.incomeData,
        borderWidth: 2,
      },
      {
        label: "Expence",
        backgroundColor: "#F97316",
        data: barChartData?.expenceData,
      },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="card bg-white flex justify-center items-center p-4">
      {barChartData && <Bar data={data1} options={options1} />}
      {!barChartData && (
        <div className="flex justify-center items-end   gap-4 w-full ">
          <div className="skeleton h-14 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-14 w-4"></div>
        </div>
      )}
    </div>
  );
};

export default BarChart;
