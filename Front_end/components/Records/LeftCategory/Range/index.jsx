import React from "react";
import RangeSlider from "./RangeSlider";

const Range = () => {
  return (
    <div className="card bg-white mt5">
      <div className="flex  flex-col gap-5 mt-5">
        <h className="font-bold  text-2xl">Amount Range</h>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="0"
            className="w-[100px] 2xl:w-[150px] h-7 gap-3 bg-slate-100 border border-indigo-600 rounded-[5px]
            "
          />
          <input
            type="text"
            placeholder="1000"
            className="w-[100px] 2xl:w-[150px] h-7 gap-3 bg-slate-100 border border-indigo-600 rounded-[5px]"
          />
        </div>
        <RangeSlider />
      </div>
    </div>
  );
};

export default Range;
