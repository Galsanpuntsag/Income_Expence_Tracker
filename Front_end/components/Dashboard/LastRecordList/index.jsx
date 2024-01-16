import React, { useContext, useEffect } from "react";
import moment from "moment";
import { TransactionContext } from "@/Context/TransactionProvider";
import { UserContext } from "@/Context/UserProvider";
import { getIcons, getCurrencySymbol } from "@/utils";

const LastRecordList = () => {
  const { transactionList, getAllTransactions } =
    useContext(TransactionContext);
  const { user } = useContext(UserContext);
  console.log("TarListasxas", transactionList);

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <div className="flex flex-col gap-5 w-9/12 rounded-xl bg-white 2xl:mx-20">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-full ">
          <div className="p-2">
            <h1 className="font-bold text-xl border-b-2 border-slate-950 mt-2 ml-2 mb-3">
              Last Records
            </h1>
            {/* {!transactionList && (
              <div className="skelton w-11/12 h-10">dfsd</div>
            )} */}
            {transactionList?.map((transaction) => {
              return (
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <input className="w-4" type="checkbox" />
                    <div
                      className={`rounded-full w-10 h-10 flex justify-center items-center ${transaction.category_color}`}
                    >
                      {getIcons(transaction.category_img)}
                    </div>
                    <div className="">
                      <div className="font-bold text-xl">
                        {" "}
                        {transaction.name}
                      </div>
                      <div className="font-medium text-sm text-slate-500">
                        {moment(transaction.create_at).format("MMM Do YY")}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${
                      transaction.transaction_type === "EXP"
                        ? "text-red-400"
                        : "text-lime-500"
                    } font-bold text-lg flex items-center`}
                  >
                    {transaction.transaction_type === "EXP" ? "-" : "+"}
                    {transaction.amount}
                    {getCurrencySymbol(user.currency_type)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastRecordList;
