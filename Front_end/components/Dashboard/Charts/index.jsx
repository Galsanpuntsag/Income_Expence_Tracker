import React, { useState, useEffect, useContext } from "react";
import myAxios from "@/utils/axios";
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
import { UserContext } from "@/Context/UserProvider";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Legend,
  Colors
);

const Charts = () => {
  const { user } = useContext(UserContext);
  const [barData, setBarData] = useState(null);
  const [doughnutData, setDoughnutData] = useState(null);

  const getBarData = async () => {
    console.log("BARDATAWORKING");
    try {
      const {
        data: { barChart },
      } = await myAxios.get("/transactions/bar/" + user.id);
      console.log("BArDataAAAA_AAA", barChart);
      setBarData(barChart);
    } catch (error) {
      console.log("errBARDEERGDARLAA", error);
    }
  };

  const getDoughnutData = async () => {
    console.log("DOUGHNUTDAT_WORKING");
    try {
      const {
        data: { doughnutChart },
      } = await myAxios.get("/transactions/doughnut/" + user.id);
      console.log("DOUGHTNUT_DATAAA", doughnutChart);
      setDoughnutData(doughnutChart);
    } catch (error) {
      console.log("errDOUGNUTGARLAA", error);
    }
  };

  useEffect(() => {
    getBarData();
    getDoughnutData();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full lg:w-5/6 2xl:w-10/12 mb-5 gap-5">
        <BarChart barChartData={barData} />
        <DoughnutChart doughnutChartData={doughnutData} />
      </div>
    </>
  );
};

export default Charts;
