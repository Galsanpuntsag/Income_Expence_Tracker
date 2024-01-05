import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CategoryList = ({ name, onSelectCategory, selectedCategories }) => {
  console.log("NAme", name);
  return (
    <div className="flex my-3 items-center justify-between">
      <div className="flex items-center gap-3">
        {
          <button
            onClick={() => {
              onSelectCategory(name);
            }}
          >
            {!selectedCategories.includes(name) && <FiEye />}
            {selectedCategories.includes(name) && <FiEyeOff />}
          </button>
        }

        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CategoryList;
