import { Select } from "@mui/material";
import React from "react";

import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { FcShop } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
import { GiCigarette } from "react-icons/gi";
import { FaBus } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const AddCtgry = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="flex border-b-2 border-slate-950 font-medium text-lg">
          Add Category
        </h3>
        <div className="flex justify-between mt-5">
          <select className="select select-bordered select-sm w-20">
            <option disabled selected></option>

            <IoIosFitness />

            {/* <option>
              <IoFitness />
            </option>
            <option>
              <FcShop />
            </option>
            <option>
              <GrGallery />
            </option>
            <option>
              <GiCigarette />
            </option>
            <option>
              <FaBus />
            </option>
            <option>
              <FaCarCrash />
            </option>
            <option>
              <GiClothes />
            </option>
            <option>
              <GrYoga />
            </option> */}
          </select>
          <div className="w-3/4 flex gap-10 justify-center border-gray-400 h-10 bg-slate-50 items-center rounded-2xl ">
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
