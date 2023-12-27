import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";
import { CategoryContext } from "@/Context/CategoryContext";
import RecordIcons from "../../RecordIcons";
import { getIcons } from "@/utils";

const ExpIncSwitch = ({ handleClose }) => {
  const { changeTransactionData, transactionData, addTransaction } =
    useContext(TransactionContext);

  const AddRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    handleClose();
  };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div>
      <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
        <button
          className={`flex-1 btn-md rounded-3xl border-none  ${
            transactionData.transaction_type === "EXP" &&
            "bg-[#0166FF] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "EXP");
          }}
        >
          Expense
        </button>
        <button
          className={`flex-1 btn-md rounded-3xl border-none ${
            transactionData.transaction_type === "INC" &&
            "bg-[#228822] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "INC");
          }}
        >
          Income
        </button>
      </div>
      <form>
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input
            type="number"
            className="bg-[#F9FAFB] border-none"
            placeholder="$ 000,0"
            value={transactionData.amount}
            name="amount"
            onChange={(e) => {
              console.log(e.target.name, e.target.value);
              changeTransactionData(e.target.name, e.target.value);
            }}
          />
        </div>
        <h1 className="mt-4 mb-2 font-semibold">Category</h1>
        <details className="dropdown w-full">
          <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
            <div className="flex items-center gap-2">
              {getIcons("home", "green")}
              {"HOME"}
            </div>
          </summary>
          <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
            <RecordIcons changeTransactionData={changeTransactionData} />
          </ul>
        </details>
        <div className="flex">
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="datetime-local"
              placeholder="Oct 30,2023"
              className="w-full input input-bordered bg-[#F9FAFB]"
              name="updated_at"
              onChange={(e) => {
                console.log("first", e.target.value);
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <button
        onClick={AddRecord}
        className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
          transactionData.transaction_type === "INC"
            ? "bg-[#228822]"
            : "bg-[#0166FF]"
        }`}
      >
        Add Record
      </button>
    </div>
  );
};

export default ExpIncSwitch;
