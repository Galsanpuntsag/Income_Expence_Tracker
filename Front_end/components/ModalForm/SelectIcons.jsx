import React, { useContext, useState } from "react";
import AddCtgry from "../Category/AddCtgry";
import { getIcons } from "@/utils";
import { FaPlusCircle } from "react-icons/fa";

const SelectIcons = ({
  open,
  handleClose,
  handleOpen,
  category,
  changeTransactionData,
}) => {
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
        {/* <button className="text-xl ml-1 mb-2">
          Add category
          <AddCtgry open={open} handleClose={handleClose} />
        </button> */}
      </div>
      <div className="flex">
        {category.map((el) => (
          <button
            className="w-full font-normal flex ml-3 items-center my-2 gap-3 hover:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              console.log(el.id);
              changeTransactionData("category_id", el.id);
            }}
          >
            {getIcons(el.iconName, el.iconColor)}
            {el.name}
          </button>
        ))}
      </div>
    </details>
  );
};

export default SelectIcons;
