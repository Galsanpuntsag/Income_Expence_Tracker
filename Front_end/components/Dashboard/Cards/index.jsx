import React, { useState, useEffect, useContext } from "react";
import myAxios from "@/utils/axios";
import UserCard from "./UserCard";
import IncomeCard from "./IncomeCard";
import ExpenceCard from "./ExpenceCard";
import { UserContext } from "@/Context/UserProvider";
import { TransactionContext } from "@/Context/TransactionProvider";

const Cards = () => {
  const { user } = useContext(UserContext);
  const { expData, incData, getTotalExpInc } = useContext(TransactionContext);

  useEffect(() => {
    getTotalExpInc();
  }, []);

  return (
    <div className="flex mx-auto 2xl:w-11/12">
      <div className="flex flex-col justify-center 2xl:justify-around gap-3 2xl:gap-10 lg:flex-row lg:gap-7 mt-2 p-5">
        <div className="">
          <UserCard user={user} expData={expData} incData={incData} />
        </div>
        <div className="flex  gap-4 mt-2 lg:gap-7">
          <div className="flex-1 ">
            {" "}
            <IncomeCard incData={incData} user={user} />
          </div>
          <div className="flex-1">
            {" "}
            <ExpenceCard expData={expData} user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
