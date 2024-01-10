import React, { useState, useEffect, useContext } from "react";
import { IconFirst } from "@/Iconsvg";
import { IconCircle } from "@/Iconsvg";
import { VoiceLogo } from "@/Iconsvg";
import { UserContext } from "@/Context/UserProvider";
import { TransactionContext } from "@/Context/TransactionProvider";

const UserCard = () => {
  const { user } = useContext(UserContext);
  const { barChartData, doughnutChartData } = useContext(TransactionContext);

  return (
    <div className="flex justify-between bg-blue-600 w-full h-50 rounded-lg lg:w-[330px] 2xl:w-[450px] 2xl:h-[200px]">
      <div className="flex flex-col ml-5 justify-around items-center">
        <div className="flex items-centergap-2">
          <IconFirst />
          <h className="text-slate-100 text-lg">Geld</h>
        </div>
        <div className="flex">sdfas</div>
      </div>
      <div className="relative bottom-0 right-0">
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
