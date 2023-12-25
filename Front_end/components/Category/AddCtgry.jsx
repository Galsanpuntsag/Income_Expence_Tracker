import React, { useState, useContext } from "react";
import { icons, colors } from "@/utils";
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CategoryContext } from "@/Context/CategoryContext";

const AddCtgry = ({ addCategory, categoryClose }) => {
  const [displayIcon, setDisplayIcon] = useState("");
  const { category } = useContext(CategoryContext);
  const [showIcon, setshowIcon] = useState("");

  const handleChange = (event) => {
    setDisplayIcon(event.target.value);
  };

  return (
    <dialog open={addCategory} className="modal">
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
        <div className="flex mt-5">
          <details className="dropdown flex">
            <summary className="flex">
              <div className="flex items-center gap-7 border rounded-md border-slate-200 p-1 py-2">
                <FaHome size={30} />
                <IoIosArrowDown />
              </div>
            </summary>
            <ul className="shadow p-2 menu dropdown-content z-[1] bg-base-100 rounded-box w-96">
              <div className="grid grid-cols-6 w-full gap-4 border-b-2 pb-2 cursor-pointer">
                {icons.map((el) => {
                  return <button>{el.icon}</button>;
                })}
              </div>
              <ul>
                {colors.map((color) => {
                  return (
                    <button
                      className={`w-7 h-7 rounded-full ${color}`}
                    ></button>
                  );
                })}
              </ul>
            </ul>
          </details>
          <div className="py-3 px-3 ml-4 bg-base-200 rounded-lg hover:border-purple-500 hover:border-2 w-full ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="bg-base-200 w-full "
            />
          </div>
        </div>
        <button onClick={categoryClose} className="btn btn-success w-full mt-5">
          Add
        </button>
      </div>
    </dialog>
  );
};

export default AddCtgry;
