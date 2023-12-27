import React, { useContext } from "react";
import { getIcons } from "@/utils";
import { CategoryContext } from "@/Context/CategoryContext";

const RecordIcons = ({ changeTransactionData }) => {
  const { category } = useContext(CategoryContext);

  return (
    <div>
      {category.map((el) => (
        <button
          key={el.id}
          className="w-full font-normal flex ml-3 items-center my-2 gap-3 hover:opacity-50"
          onClick={(e) => {
            e.preventDefault();
            console.log("categoryEL.id", el.id);
            changeTransactionData("category_id", el.id);
          }}
        >
          {getIcons(el.iconname, el.category_color)}
          {el.iconname}
        </button>
      ))}
    </div>
  );
};

export default RecordIcons;
