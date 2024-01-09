import React from "react";
import { IconFirst } from "@/Iconsvg";
import { IconCircle } from "@/Iconsvg";
import { VoiceLogo } from "@/Iconsvg";

const UserCard = () => {
  return (
    <div className="flex justify-between bg-blue-600 w-full h-50 rounded-lg lg:w-[330px] 2xl:w-[450px] 2xl:h-[200px]">
      <div className="flex mt-10 ml-8 gap-2">
        <IconFirst />
        <h className="text-slate-100 text-lg">Geld</h>
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
