import React from "react";
import SelectIcons from "./SelectIcons";

const SelectCtgry = () => {
  return (
    <details>
      <summary className="border-slate-500 pl-3 rounded-md mt-2 border">
        Choice your category
      </summary>
      <p className="text-xl">+ add</p>
      <p className="flex">
        <SelectIcons />
      </p>
    </details>
  );
};

export default SelectCtgry;
