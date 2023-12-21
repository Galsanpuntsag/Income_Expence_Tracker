import React, { useContext, useState } from "react";
import AddCtgry from "../Category/AddCtgry";

import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

import { TransactionContext } from "@/Context/TransactionProvider";

const SelectIcons = ({ open, handleClose, handleOpen }) => {
  const { addTransaction, TransactionData, changeTransactionData } =
    useContext(TransactionContext);
  // console.log("CLICK", onChange);
  const Icons = [
    {
      name: "Home",
      icon: <FaHome size={24} />,
      color: "text-blue-500",
    },
    {
      name: "Gift",
      icon: <FaGift size={24} />,
      color: "text-red-500",
    },
    {
      name: "Food",
      icon: <PiForkKnifeFill size={24} />,
      color: "text-orange-500",
    },
    {
      name: "Drink",
      icon: <FaWineGlassAlt size={24} />,
      color: "text-purple-500",
    },
    {
      name: "Taxi",
      icon: <FaTaxi size={24} />,
      color: "text-yellow-500",
    },
    {
      name: "Shopping",
      icon: <PiTShirtFill size={24} />,
      color: "text-red-500",
    },
    {
      name: "Fitness",
      icon: <IoIosFitness size={24} />,
      color: "text-green-500",
    },
  ];

  return (
    <details>
      <summary className="border-slate-500 pl-3 rounded-md mt-2 border">
        Choice your category
      </summary>
      <div className="flex gap-3 ml-1 mt-3 border-b-2 border-slate-500">
        <div className="text-primary mt-1 ">
          {" "}
          <FaPlusCircle size={24} />
        </div>
        <button className="text-xl ml-1 mb-2" onClick={handleOpen}>
          Add category
          <AddCtgry open={open} handleClose={handleClose} />
        </button>
      </div>
      <p className="flex">
        <button className="w-full font-normal flex ml-3 items-center my-2 gap-3">
          <div className="flex flex-col gap-3">
            {Icons.map((el) => {
              return (
                <div className="flex gap-2">
                  <li></li>
                  <div className={`mt-1 rounded-full mr-1 ${el.color}`}>
                    {el.icon}
                  </div>
                  <h>{el.name}</h>
                </div>
              );
            })}
          </div>
        </button>
      </p>
    </details>
  );
};

export default SelectIcons;
