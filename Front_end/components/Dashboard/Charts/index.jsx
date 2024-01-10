import React, { useContext, useEffect } from "react";
import { Colors } from "chart.js";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";
import BarChart from "./Barchart";
import DoughnutChart from "./DoughnutChart";
import { TransactionContext } from "@/Context/TransactionProvider";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Legend,
  Colors
);

const Charts = () => {
  const { barChartData, doughnutChartData, getChartData } =
    useContext(TransactionContext);
  console.log("Bar", barChartData);
  console.log("Dough", doughnutChartData);

  useEffect(() => {
    console.log("ChartDatauseEffecting");
    getChartData();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full lg:w-5/6 2xl:w-10/12 mb-5 gap-5">
        <BarChart barChartData={barChartData} />
        <DoughnutChart doughnutChartData={doughnutChartData} />
      </div>
    </>
  );
};

export default Charts;
