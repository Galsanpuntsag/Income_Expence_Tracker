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
    </div>
  );
};

export default ExpenceList;
