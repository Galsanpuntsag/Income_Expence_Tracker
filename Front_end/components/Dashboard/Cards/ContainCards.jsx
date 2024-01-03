import React from "react";
import UserCard from "./UserCard";
import IncomeCard from "./IncomeCard";
import ExpenceCard from "./ExpenceCard";

const ContainCards = () => {
  return (
    <div className="mx-auto 2xl:w-11/12">
      <div className="flex justify-center 2xl:justify-around gap-3 lg:gap-20 2xl:gap-10 mt-5 p-5">
        <UserCard />
        <IncomeCard />
        <ExpenceCard />
      </div>
    </div>
  );
};

export default ContainCards;
