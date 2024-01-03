import React, { useContext } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";
import { UserContext } from "@/Context/UserProvider";
import { getCurrencySymbol } from "@/utils";

const ExpenceCard = () => {
  const { cashData } = useContext(TransactionContext);
  const { user } = useContext(UserContext);
  console.log("EXPDAta", user);
  return (
    <div className=" lg:w-[350px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
      <div className="flex flex-col ">
        <div className="flex gap-3 ">
          <div className=" mt-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-primary w-5 h-5"
              checked
            />
          </div>
          <h className=" text-xl font-semibold border-b-2 border-indigo-500 w-full mb-3">
            Total Expence
          </h>
        </div>
        <div className="">
          <h1 className="text-3xl font-extrabold mt-2 2xl:mt-5">
            {cashData}
            {getCurrencySymbol(user?.currency_type)}
          </h1>
          <h2 className="text-lg font-bold text-slate-400 2xl:mt-5">
            Your expence amount
          </h2>
          <div className="flex gap-5 2xl:mt-5">
            <div className="w-5 mt-3 lg:w-7">
              <img src="ArrowDown.png"></img>
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

export default ExpenceCard;
