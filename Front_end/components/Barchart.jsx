import React from "react";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data1 = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "#85CC16",
        data: [
          1000000, 3000000, 30000, 100000, 3000000, 3000000, 5000000, 3000000,
          3000000, 3000000, 3000000, 3000000,
        ],
        borderWidth: 2,
      },
      {
        label: "My First Dataset",
        backgroundColor: "#F97316",
        data: [1000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      },
    ],
  };
  const options1 = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };
  return (
    <div className="flex justify-center gap-20 my-7 w-full">
      <div className="flex-1 2xl:mr-10 2xl:h-[500px] bg-white lg:ml-10 p-3 rounded-lg">
        <h1 className="border-b-2 border-slate-950 2xl:pb-3 lg:mb-5 mb-2 font-semibold">
          Income - Expense
        </h1>

        <Bar options={options1} data={data1} />
      </div>
    </div>
  );
};

export default BarChart;
