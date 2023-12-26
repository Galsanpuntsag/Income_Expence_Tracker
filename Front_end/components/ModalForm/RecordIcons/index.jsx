import React, { useContext } from "react";
import { getIcons } from "@/utils";
import { FaPlusCircle } from "react-icons/fa";
import { CategoryContext } from "@/Context/CategoryContext";

const RecordIcons = ({ changeTransactionData }) => {
  const { category } = useContext(CategoryContext);

  return (
    <details>
      <summary className="border-slate-500 pl-3 rounded-md mt-2 border">
        Choice your category
      </summary>
      <div className="flex gap-3 ml-1 mt-3 border-b-2 border-slate-500">
        <div className="text-primary mt-1 ">
          <FaPlusCircle size={24} />
        </div>
      </div>
      <div className="flex">
        {category.map((el) => (
          <button
            className="w-full font-normal flex ml-3 items-center my-2 gap-3 hover:opacity-50"
            onClick={(e) => {
              e.preventDefault();
              console.log(el.id);
              changeTransactionData("id", el.id);
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

export default RecordIcons;
