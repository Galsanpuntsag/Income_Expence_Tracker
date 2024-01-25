import React, { useState, useContext } from "react";
import { array1 } from "@/components/Data/index.jsx";
import AddRecordForm from "@/components/ModalForm/AddRecordForm";
import { TransactionContext } from "@/Context/TransactionProvider";

const CtgryTop = () => {
  const { transactionList } = useContext(TransactionContext);
  console.log("FILTERING_Trans", transactionList);
  const [open, setOpen] = useState(false);
  const [displayCate, setDisplayCate] = useState();

  const filterInc = () => {
    transactionList.filter((transaction) => {
      transaction.transaction_type === "INC";
    });
  };

  const filterExp = () => {
    transactionList.filter((transaction) => {
      transaction.transaction_type === "Exp";
    });
  };

  const closeForm = () => {
    console.log("CloseFrm");
    setOpen(false);
  };
  return (
    <div open={open}>
      <div className="">
        <div className="flex flex-col gap-3 ">
          <h className="mt-5 text-2xl font-black">Records</h>
          <button
            className="btn bg-primary  w-full lg:max-w-[283px] 2xl:max-w-xs"
            onClick={() => {
              setOpen(true);
            }}
          >
            + Add
          </button>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-3  ">
        <h1 className="mt-1 2xl:mt-5 text-2xl font-bold">Types</h1>
        <div className="">
          {array1.map((el) => {
            return (
              <div className="flex text-center gap-5 my-1">
                <input
                  type="checkbox"
                  checked={false}
                  className="checkbox mb-1 2xl:mb-4"
                  onChange={() => {
                    console.log("CHANGED", el.type);
                  }}
                ></input>
                <h className=" font-bold ">{el.name}</h>
              </div>
            );
          })}
        </div>
      </div>
      <AddRecordForm open={open} closeForm={closeForm} />
    </div>
  );
};

export default CtgryTop;
