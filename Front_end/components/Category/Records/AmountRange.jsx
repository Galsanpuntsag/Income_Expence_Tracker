import React from "react";

const AmountRange = () => {
  return (
    <div className="card bg-white mt5">
      <div className="flex  flex-col gap-5 mt-5">
        <h className="">Amount Range</h>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="0"
            className="w-[150px] h-7 gap-3 bg-slate-100 border border-indigo-600 rounded-[5px]"
          />
          <input
            type="text"
            placeholder="1000"
            className="w-[150px] h-7 gap-3 bg-slate-100 border border-indigo-600 rounded-[5px]"
          />
        </div>
        <div className="">
          <ul className="steps">
            <li className="step step-primary">0</li>
            <li className="step step-primary"></li>
            <li className="step"></li>
            <li className="step">10000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AmountRange;
