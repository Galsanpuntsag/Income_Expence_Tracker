import React, { useContext } from "react";
import moment from "moment";
import { UserContext } from "@/Context/UserProvider";
import { getIcons, getCurrencySymbol } from "@/utils";

const ListData = ({ transactionList }) => {
  const { user } = useContext(UserContext);
  console.log("record", user);
  return (
    <div className="">
      <div className=" w-full shadow-xl mt:5 2xl:mt-10 ">
        <div className="card-body">
          <h1 className="font-semibold "> Today</h1>
          {transactionList.map((transaction) => {
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
                    <div className="font-bold text-xl"> {transaction.name}</div>
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
          <h1 className="font-semibold "> Yesterday</h1>
        </div>
      </div>
    </div>
  );
};

export default ListData;
