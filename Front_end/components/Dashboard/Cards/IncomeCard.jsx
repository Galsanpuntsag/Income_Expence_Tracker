import React, { useState, useEffect, useContext } from "react";
import { getCurrencySymbol } from "@/utils";

const IncomeCard = ({ incData, user }) => {
  console.log("IncDAtaaa", incData);

  // console.log("DataCash", user);
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
  //   getTotalExpInc;
  // }, [!refresh]);

  return (
    <div className="lg:w-[350px] rounded-xl bg-slate-50 lg:p-4 2xl:w-[550px] 2xl:h-[280px]">
      <div className="flex flex-col p-2 lg:p-0 ">
        <div className="flex gap-2">
          <div className=" mt-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-success w-5 h-5"
              checked
            />
          </div>
          <h className=" text-xl font-semibold border-b-2 border-indigo-500 w-full  ">
            Income
          </h>
        </div>
        <div className="">
          <h1 className="text-3xl text-center font-bold 2xl:text-4xl 2xl:font-extrabold mt-2 2xl:mt-5 text-green-500 lg:mt-5">
            {incData && incData}
            {incData && getCurrencySymbol(user?.currency_type)}
            {!incData && <div className="skeleton h-14 w-full"></div>}
          </h1>
          <h2 className="text-sm text-center lg:text-xl lg:font-bold text-green-500 2xl:mt-5">
            Your income amount
          </h2>
          <div className="flex gap-2 justify-center lg:gap-5 2xl:mt-5">
            <div className="flex w-12  mt-5">
              <img src="ArrowUp.png"></img>
            </div>
            <h3 className=" mt-4 font-medium text-green-500 2xl:mt-3">
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
