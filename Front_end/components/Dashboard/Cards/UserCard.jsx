import React, { useState, useEffect, useContext } from "react";
import { IconFirst } from "@/Iconsvg";
import { IconCircle } from "@/Iconsvg";
import { VoiceLogo } from "@/Iconsvg";
import { UserContext } from "@/Context/UserProvider";
import { TransactionContext } from "@/Context/TransactionProvider";
import { thousandify } from "@/utils";
import { getCurrencySymbol } from "@/utils";

const UserCard = ({ user, expData, incData }) => {
  return (
    <div className="flex justify-between bg-blue-600 w-full rounded-lg lg:w-[350px] lg:h-[230px] lg:mt-2">
      <div className="flex flex-col ml-5 justify-around items-center">
        <div className="flex items-center gap-2">
          <IconFirst />
          <h className="text-slate-100 text-lg">Geld</h>
        </div>
        <div className="flex text-3xl font-bold text-yellow-400 w-20 h-5">
          {thousandify(user?.balance)}

          {getCurrencySymbol(user?.currency_type)}
        </div>
      </div>
      <div className="relative bottom-0 right-0 lg:mt-[55px]">
        <p>
          {" "}
          <IconCircle />
        </p>
        <div className="absolute bottom-5 right-5">
          <p>
            {" "}
            <VoiceLogo />
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
