import React, { useState, useContext, useEffect } from "react";

import { TransactionContext } from "@/Context/TransactionProvider";
import { CategoryContext } from "@/Context/CategoryContext";
import RecordIcons from "../RecordIcons";
import PayNote from "./PayNote";

const Expence = ({
  showExpense,
  setShowExpence,
  setShowIncome,
  open,
  handleClose,
  handleOpen,
}) => {
  const { changeTransactionData, transactionData, addTransaction } =
    useContext(TransactionContext);
  const { getCategories } = useContext(CategoryContext);

  const AddRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    handleClose();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={`flex flex-col ${showExpense}`}>
      <div className="flex" open={open}>
        <div className="flex flex-col">
          <div className="bg-slate-50 2xl:mt-5 p-1 mt-7 max-w-xs lg:max-w-[280px] rounded-xl 2xl:max-w-sm">
            <button
              className={`btn btn-sm btn-primary w-1/2 ${
                transactionData.transaction_type === "EXP" &&
                "bg-[#0166FF] text-white"
              }`}
              onClick={() => {
                changeTransactionData("transaction_type", "EXP");
              }}
            >
              Expence
            </button>
            <button
              className={`btn btn-sm w-1/2 ${
                transactionData.transaction_type === "INC" &&
                "bg-green-500 text-white"
              }`}
              onClick={(event) => {
                setShowExpence("hidden");
                setShowIncome("");
                console.log("eee", event.target.value);
                changeTransactionData("transaction_type", "INC");
              }}
            >
              Income
            </button>
          </div>
          <div className="">
            <button className="btn btn-lg pb-2 flex justify-start max-w-sm mt-4">
              <h className="text-md mt-1 font-semibold">Amount</h>
              <input
                type="number"
                placeholder="₮ 000.00"
                name="amount"
                value={transactionData.amount}
                onChange={(e) => {
                  changeTransactionData(e.target.name, e.target.value);
                }}
                className="input input-ghost input-xs w-full max-w-sm"
              />
            </button>
          </div>
          <div className=" mt-5">
            <h className="text-lg font-semibold">Category</h>
            <RecordIcons
              open={open}
              handleClose={handleClose}
              handleOpen={handleOpen}
              changeTransactionData={changeTransactionData}
            />
          </div>
          <div className="flex gap-1 max-w-xs">
            <div className="">
              <label className="label">
                <span className="text-lg font-semibold label-text">Date</span>
              </label>
              <input
                name="updated_at"
                type="datetime-local"
                placeholder="Oct 30,2023"
                className=" w-full input input-bordered input-primary"
                onChange={(e) => {
                  console.log("first", e.target.value);
                  changeTransactionData(e.target.name, e.target.value);
                }}
              />
            </div>
          </div>
          {/* <div className="mt-5">
           
          </div> */}
        </div>

        <div className="flex">
          <PayNote
            transactionData={transactionData}
            changeTransactionData={changeTransactionData}
          />
        </div>
      </div>
      <button
        className="btn bg-primary w-full text-lg font-semibold lg:max-w-[270px] 2xl:max-w-xs "
        onClick={AddRecord}
      >
        Add
      </button>
    </div>
  );
};

export default Expence;
