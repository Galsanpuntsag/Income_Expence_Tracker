import React, { useContext } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";

const ExpenceList = () => {
  const { getAllTransaction, transactions } = useContext(TransactionContext);
  return (
    <div className="flex flex-col gap-5 w-10/12 rounded-xl bg-white 2xl:mx-20">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-full ">
          <div className="">
            <h1 className="font-bold text-xl mt-2 ml-2">Last Records</h1>
            <div className="flex border-b-2 border-slate-950 w-full"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-full mx-20">
          <div className="">
            <div className="border-b-2 border-indigo-500 "></div>
          </div>
          <div className="">
            <div className="flex justify-between mt-3">
              <div className="flex">
                <img
                  className="bg-blue-500 rounded-full lg:w-9 lg:h-9"
                  src="House.png"
                ></img>
                <div className="ml-4">
                  <h1 className="text-xl font-medium">Lending & Rending</h1>
                  <h2 className="text-[10px] text-slate-400">3 hours ago</h2>
                </div>
              </div>
              <div className="text-green-300">-10000 ₮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenceList;
