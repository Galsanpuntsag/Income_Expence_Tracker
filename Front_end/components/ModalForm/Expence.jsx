import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
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
  const [category, setCategory] = useState([]);
  const { changeTransactionData, transactionData, addTransaction } =
    useContext(TransactionContext);

  const AddRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    handleClose();
  };

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get("http://localhost:8008/categories");
    console.log("FINDcategories", categories);
    setCategory(categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={`flex ${showExpense}`}>
      <div open={open}>
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
        </div>
        <div className=" mt-5">
          <h className="text-lg font-semibold">Category</h>
          <SelectIcons
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
            changeTransactionData={changeTransactionData}
            category={category}
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
        <div className="mt-5">
          <button
            className="btn bg-primary w-full text-lg font-semibold lg:max-w-[283px] 2xl:max-w-xs "
            onClick={AddRecord}
          >
            Add
          </button>
        </div>
      </div>
      <div className="">
        <PayNote />
      </div>
    </div>
  );
};

export default Expence;
