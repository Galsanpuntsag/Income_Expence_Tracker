import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { FcShop } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
import { GiCigarette } from "react-icons/gi";
import { FaBus } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillBank } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa6";
import { FaBicycle } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const AddCtgry = ({ open, handleClose }) => {
  const icons = [
    <FaDribbble />,
    <FaBicycle />,
    <FaBitcoin />,
    <SiNetflix />,
    <FaApple />,
    <AiFillBank />,
    <IoFitness />,
    <FcShop />,
    <GrGallery />,
    <GiCigarette />,
    <FaBus />,
    <GiClothes />,
    <GrYoga />,
    <IoIosFitness />,
    <FaCarCrash />,
  ];

  const colors = [
    { color: "bg-primary" },
    { color: "bg-secondary" },
    { color: "bg-warning" },
    { color: "bg-success" },
    { color: "bg-info" },
    { color: "bg-accent" },
  ];

  const [displayIcon, setDisplayIcon] = useState("");

  const handleChange = (event) => {
    setDisplayIcon(event.target.value);
  };
  return (
    <dialog open={open} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </button>
        </form>
        <h3 className="flex border-b-2 border-slate-950 font-medium text-lg">
          Add Category
        </h3>
        <div className="flex justify-between mt-5">
          <div className="dropdown w-30  ">
            <label
              tabIndex={0}
              className="btn m-1 rounded-xl w-full h-[10px] flex justify-between text-3xl bg-slate-50"
            >
              {setDisplayIcon ? setDisplayIcon : icons[0]}
              <FaHome />
              <IoIosArrowDown className="w-5" />
            </label>
            <div className="dropdown-content menu shadow-2xl bg-base-100 rounded-box w-72 flex-row">
              {icons.map((icon) => {
                return (
                  <div
                    onChange={() => {
                      setDisplayIcon(icon);
                    }}
                    className=" p-3 text-2xl flex ml-1 "
                  >
                    {icon}
                  </div>
                );
              })}
              <div className="border-b-2 border-slate-600 mt-2 w-full"></div>
              <div className="grid grid-cols-6 gap-5 flex-row mx-auto mt-3 ">
                {colors.map((color) => {
                  return (
                    <div
                      className={` w-5 h-5 rounded-full ${color.color}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-3/4 flex gap-10 justify-center border-gray-400 h-12 mt-1 bg-slate-50 items-center rounded-2xl ">
            <input
              placeholder="Name"
              className="w-2/3  h-7 rounded-xl pl-2 border-gray-500"
            />
            <select className="select select-bordered select-sm  w-5 h-5">
              <option>Hang out</option>
              <option>Entertiament</option>
              <option>Onlian shopping</option>
              <option>Fitness</option>
            </select>
          </div>
        </div>
        <button className="btn btn-success w-full mt-5">Add</button>
      </div>
    </dialog>
  );
};

export default AddCtgry;
