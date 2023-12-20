import React, { useState, useContext } from "react";
import PayNote from "./PayNote";
import SelectIcons from "./SelectIcons";
import { TransactionContext } from "@/Context/TransactionProvider";

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
  const handleChange = (e) => {};
  const [change, setChange] = useState("");

  return (
    <div className={`flex ${showExpense}`}>
      <div open={open}>
        <div className="flex flex-col">
          <div className="bg-slate-50 2xl:mt-5 p-1 mt-7 max-w-xs lg:max-w-[280px] rounded-xl 2xl:max-w-sm">
            <button className="btn btn-sm btn-primary w-1/2">Expence</button>
            <button
              className="btn btn-sm w-1/2"
              onClick={(event) => {
                setShowExpence("hidden");
                setShowIncome("");
                console.log("eee", event.target.value);
              }}
            >
              Income
            </button>
          </div>
          <div className="">
            <button className="btn btn-lg pb-2 flex justify-start max-w-sm mt-4">
              <h className="text-md mt-1 font-semibold">Amount</h>
              <input
                type="text"
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
        </div>
        <div className=" mt-5">
          <h className="text-lg font-semibold">Category</h>
          <SelectIcons
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </div>
        <div className="flex gap-1 mt-3"> </div>
        <div className="flex gap-1 max-w-xs">
          <div className="">
            <label className="label">
              <span className="text-lg font-semibold label-text">Date</span>
            </label>
            <input
              name="updated_at"
              type="date"
              placeholder="төрсөн он сараа оруулна уу"
              value={transactionData.updated_at}
              onChange={(e) => {
                changeTransactionData(e.target.name, e.target.value);
              }}
              className="  lg:w-[140px] 2xl:w-full input input-bordered input-primary"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="text-lg font-semibold label-text">Time</span>
            </label>
            <input
              name="birthDate"
              type="date"
              placeholder="төрсөн он сараа оруулна уу"
              className=" lg:w-[140px] 2xl:w-full input input-bordered input-primary"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            className="btn bg-primary w-full text-lg font-semibold lg:max-w-[283px] 2xl:max-w-xs "
            onClick={addTransaction}
          >
            Add
          </button>
        </div>
      </div>
      <div className="">
        <PayNote
          transactionData={transactionData}
          changeTransactionData={changeTransactionData}
          addTransaction={addTransaction}
        />
      </div>
    </div>
  );
};

export default Expence;
