import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CategoryList = ({ data, name, onSelectCategory, selectedCategories }) => {
  console.log("NAme", data);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {
          <button
            onClick={() => {
              onSelectCategory(data);
            }}
          >
            {!selectedCategories.includes(data) && <FiEye />}
            {selectedCategories.includes(data) && <FiEyeOff />}
          </button>
        }

        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default CategoryList;
