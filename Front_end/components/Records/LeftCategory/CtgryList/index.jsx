import React, { useState, useContext } from "react";
import { CategoryContext } from "@/Context/CategoryContext";
import Form from "./Form";
import { TiEye } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import CategoryList from "./CategoryList";

const CtgryList = () => {
  const [openCategory, setOpenCategory] = useState(false);
  const categoryClose = () => {
    setOpenCategory(false);
  };
  const { category, onSelectCategory, selectedCategories } =
    useContext(CategoryContext);
  console.log("cateColor", category);
  return (
    <div className="mt-5 text-2xl font-bold flex flex-col justify-between">
      <div className="flex justify-around mb-5">
        <h className="">Category</h>
        <button className="text-slate-200">Clear</button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-around gap-3">
          {category?.map((el) => (
            <CategoryList
              onSelectCategory={onSelectCategory}
              selectedCategories={selectedCategories}
              name={el.iconname}
              key={el.id}
            />
          ))}
          {console.log("categoryAss", category)}
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

export default CtgryList;
