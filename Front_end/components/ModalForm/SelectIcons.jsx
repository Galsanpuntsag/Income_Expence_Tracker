import React from "react";

import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";

import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

const SelectIcons = () => {
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
    <div>
      <button className="w-full font-normal flex  items-center my-4  gap-3">
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
    </div>
  );
};

export default SelectIcons;
