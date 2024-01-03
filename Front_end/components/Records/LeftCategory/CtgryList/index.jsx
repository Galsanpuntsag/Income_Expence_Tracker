import React, { useState, useContext } from "react";
import { CategoryContext } from "@/Context/CategoryContext";
import Form from "./Form";
import { TiEye } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";

const CategoryList = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const categoryClose = () => {
    setOpenCategory(false);
  };
  const { category } = useContext(CategoryContext);
  return (
    <div className="mt-5 text-2xl font-bold flex flex-col justify-between">
      <div className="flex justify-around mb-5">
        <h className="">Category</h>
        <button className="text-slate-200">Clear</button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-around gap-3">
          {category.map((el) => {
            return (
              <div className="flex justify-between tex-2xl">
                <TiEye />
                <h1 className="flex flexcol">{el.iconname}</h1>
                <IoMdArrowDropright />
              </div>
            );
          })}
        </div>

        <button
          className="btn mt-5"
          onClick={() => {
            setOpenCategory(true);
          }}
        >
          + Add Category
        </button>
        <Form categoryClose={categoryClose} openCategory={openCategory} />
      </div>
    </div>
  );
};

export default CategoryList;
