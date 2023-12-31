import React from "react";
import ExpenceList from "./ExpenceList";

import BarChart from "../Barchart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import DoughnutChart from "../DoughnutChart";
ChartJS.register(ArcElement, Tooltip, Legend);
// Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const Charts = () => {
  return (
    <>
      <div className="flex justify-center  flex-col items-center">
        <div className="flex justify-center items-center w-full lg:w-5/6 2xl:w-10/12 mb-5">
          <BarChart />
          <DoughnutChart />
        </div>
        <div className="w-full flex justify-center">
          <ExpenceList />
        </div>
      </div>
    </>
  );
};

export default Charts;
