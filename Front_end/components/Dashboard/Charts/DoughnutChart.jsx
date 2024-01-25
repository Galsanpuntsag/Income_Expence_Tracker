import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { TransactionContext } from "@/Context/TransactionProvider";

const DoughnutChart = ({ doughnutChartData }) => {
  console.log("DoughNote_Data", doughnutChartData);
  const data2 = {
    datasets: [
      {
        data: doughnutChartData?.data,

        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: [doughnutChartData?.labels],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className=" bg-slate-50 rounded-2xl p-4 w-full  ">
      {doughnutChartData && (
        <Doughnut
          style={{ width: "50%", height: "30%" }}
          options={options2}
          data={data2}
        />
      )}
      {!doughnutChartData && (
        <div className="flex justify-center items-end gap-6 w-full py-5 ">
          <div className="skeleton h-14 w-4 "></div>
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

export default DoughnutChart;
