import React from "react";
import { getCurrencySymbol } from "@/utils";

const ExpenceCard = ({ expData, user }) => {
  return (
    <div className=" lg:w-[350px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
      <div className="flex flex-col p-3 ">
        <div className="flex gap-2 ">
          <div className=" mt-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-primary w-5 h-5"
              checked
            />
          </div>
          <h className=" text-xl font-semibold border-b-2 border-indigo-500 w-full">
            Expence
          </h>
        </div>
        <div className="">
          <h1 className="text-3xl text-center font-bold 2xl:text-4xl 2xl:font-extrabold text-red-500 mt-2 2xl:mt-5">
            {expData && expData}
            {expData && getCurrencySymbol(user?.currency_type)}
            {!expData && <div className="skeleton h-14 w-full"></div>}
          </h1>
          <h2 className="text-[13px] text-center lg:text-xl lg:font-bold text-error 2xl:mt-5">
            Your expence amount
          </h2>
          <div className="flex gap-2 justify-center lg:gap-5 2xl:mt-5">
            <div className="flex w-12 mt-5">
              <img src="ArrowDown.png"></img>
            </div>
            <h3 className=" mt-4 font-medium text-error 2xl:mt-3">
              {" "}
              32% from last month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenceCard;
