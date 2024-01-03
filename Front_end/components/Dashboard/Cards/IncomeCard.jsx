import React, { useState, useEffect, useContext } from "react";
import MyAxios from "@/utils/axios";
import { TransactionContext } from "@/Context/TransactionProvider";

const IncomeCard = () => {
  const { cashData } = useContext(TransactionContext);
  console.log("DataCash", cashData);
  // const [totals, setTotals] = useState({ totalIncome: 0, totalExpence: 0 });
  // console.log("Start");
  // const getTotalIncome = async () => {
  //   const {
  //     data: { totalIncome },
  //   } = await MyAxios.get("/transactions/totalIncome");
  //   setTotals({ ...totals, totalIncome });
  //   console.log("END");
  // };

  // useEffect(() => {
  //   console.log("effect_work");
  //   getTotalIncome();
  // }, []);

  return (
    <div className=" lg:w-[350px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
      <div className="flex flex-col ">
        <div className="flex gap-3 ">
          <div className=" mt-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-success w-5 h-5"
              checked
            />
          </div>
          <h className=" text-xl font-light">Your Income</h>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="">
          <h1 className="text-2xl font-extrabold mt-2 2xl:mt-5">
            {cashData?.inc}
          </h1>
          <h2 className="text-[13px] font-bold text-slate-400 2xl:mt-5">
            Your income amount
          </h2>
          <div className="flex gap-5 2xl:mt-5">
            <div className="w-5 mt-3 lg:w-7">
              <img src="ArrowUp.png"></img>
            </div>
            <h3 className=" mt-4 font-medium text:xl 2xl:mt-3">
              {" "}
              32% from last month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
