import React, { useContext } from "react";
import { UserContext } from "@/Context/UserProvider";
import { CategoryContext } from "@/Context/CategoryContext";
import RecordCard from "./RecordCard";

const ListData = ({ transactionList }) => {
  const { user } = useContext(UserContext);
  const { selectedCategories } = useContext(CategoryContext);
  const filteredTransactions =
    selectedCategories.length !== 0
      ? transactionList.filter((transaction) =>
          selectedCategories.includes(transaction.category_img)
        )
      : transactionList;
  return (
    <div className="">
      <div className=" w-full shadow-xl mt:5 2xl:mt-10 ">
        <div className="card-body">
          <h1 className="font-semibold "> Today</h1>
          {filteredTransactions.map((transaction) => (
            <RecordCard transaction={transaction} user={user} />
          ))}
          <h1 className="font-semibold "> Yesterday</h1>
        </div>
      </div>
    </div>
  );
};

export default ListData;
