import React from "react";

const CardThird = () => {
  return (
    <div className=" lg:w-[350px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
      <div className="flex flex-col ">
        <div className="flex gap-3 ">
          <div className=" mt-1">
            <input
              type="radio"
              name="radio-5"
              className="radio radio-primary w-5 h-5"
              checked
            />
          </div>
          <h className=" text-xl font-light">Total Expence</h>
        </div>
        <div className="border-b-2 border-indigo-500"></div>
        <div className="">
          <h1 className="text-2xl font-extrabold mt-2 2xl:mt-5">1 200 000₮</h1>
          <h2 className="text-[13px] font-bold text-slate-400 2xl:mt-5">
            Your income amount
          </h2>
          <div className="flex gap-5 2xl:mt-5">
            <div className="w-5 mt-3 lg:w-7">
              <img src="ArrowDown.png"></img>
            </div>
            <h3 className=" mt-4 font-medium text:xl 2xl:mt-3">
              {" "}
              32% from last month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThird;
