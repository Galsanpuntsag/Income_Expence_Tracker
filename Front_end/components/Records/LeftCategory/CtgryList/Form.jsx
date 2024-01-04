import React, { useState, useContext } from "react";
import { icons, colors } from "@/utils";
import { IoIosArrowDown } from "react-icons/io";
import { CategoryContext } from "@/Context/CategoryContext";

const Form = ({ openCategory, categoryClose }) => {
  const {
    handleIcon,
    handleColor,
    inputValue,
    setInputValue,
    showIcon,
    setShowIcon,
    handleChange,
    categoryData,
    createCategory,
    setDisplayColor,
  } = useContext(CategoryContext);

  return (
    <dialog open={openCategory} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={categoryClose}
          >
            ✕
          </button>
        </form>
        <h1 className="flex border-b-2 border-slate-950 font-medium text-lg">
          Add Category
        </h1>
        <div className="flex mt-5 justify-center">
          <details className="dropdown ">
            <summary className="m-1 btn">
              <div className="flex items-center gap-7">
                <span> {showIcon ? showIcon : icons[0].icon} </span>
                <IoIosArrowDown />
              </div>
            </summary>
            <div
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-3xl bg-base-100 rounded-box w-96 justify-center z-50 flex-row"
            >
              {icons.map((icon) => {
                return (
                  <div
                    key={icon.name}
                    onClick={() => {
                      setShowIcon(icon.icon);
                      handleIcon(icon.name);
                      console.log("CATEIcon", icon.name);
                    }}
                    className="p-3 text-3xl cursor-pointer inline hover:opacity-50 "
                  >
                    {icon.icon}
                  </div>
                );
              })}
              <div className="p-3 flex gap-3 border-t-[1px] w-full">
                {colors.map((color) => {
                  return (
                    <div
                      key={color}
                      onClick={() => {
                        handleColor(color);
                        console.log("handleColor", color);
                      }}
                      className={`w-8 h-8 rounded-full hover:opacity-50`}
                      style={{ backgroundColor: transa }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </details>
          <div className="py-3 px-3 ml-4 bg-base-200 rounded-lg hover:border-purple-500 hover:border-2 w-full ">
            <input
              name="iconname"
              type="text"
              value={inputValue}
              placeholder="Name"
              className="bg-base-200 w-full "
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          onClick={() => {
            createCategory();
            setInputValue("");
            categoryClose();
            console.log("DDDDDD", categoryData);
          }}
          className="btn btn-success w-full mt-5  "
        >
          Add
        </button>
      </div>
    </dialog>
  );
};

export default Form;
