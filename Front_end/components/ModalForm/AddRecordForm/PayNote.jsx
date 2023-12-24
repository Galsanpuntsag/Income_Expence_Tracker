import React, { useContext } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";

const PayNote = () => {
  const { transactionData, changeTransactionData } =
    useContext(TransactionContext);
  return (
    <div className="lg:mt-3 lg:ml-10">
      <div className="flex flex-col">
        <h className="mt-3 text-lg font-semibold">Name</h>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={transactionData.name}
          onChange={(e) => {
            changeTransactionData(e.target.name, e.target.value);
          }}
        />
      </div>
      <div className="flex-col mt-10">
        <h1 className="mb-5 text-lg font-semibold">Node</h1>
        <div className="card w-96 h-[200px] lg:h-[240px] bg-base-100 shadow-xl ">
          <div className="  card-body">
            <input
              type="text"
              placeholder="Type here"
              name="description"
              value={transactionData.description}
              className="input w-full max-w-xs"
              onChange={(e) => {
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNote;
