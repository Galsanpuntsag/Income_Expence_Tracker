import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="mx-auto 2xl:w-11/12">
      <div className="flex justify-center 2xl:justify-around gap-3 lg:gap-20 2xl:gap-10 mt-5 p-5">
        <div className="w-[300px] bg-transparent h-[150px] 2xl:w-[450px] 2xl:h-[200px]">
          <img src="Card.png"></img>
        </div>
        <div className=" w-[300px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
          <div className="flex flex-col ">
            <div className="flex gap-3 ">
              <div className=" mt-1">
                <input
                  type="radio"
                  name="radio-5"
                  className="radio radio-success w-5 h-5"
                  checked
                />
              </div>
              <h className=" text-xl font-light">Your Income</h>
            </div>
            <div className="border-b-2 border-indigo-500"></div>
            <div className="">
              <h1 className="text-2xl font-extrabold mt-2 2xl:mt-5">
                1 200 000₮
              </h1>
              <h2 className="text-[13px] font-bold text-slate-400 2xl:mt-5">
                Your income amount
              </h2>
              <div className="flex gap-5 2xl:mt-5">
                <div className="w-5 mt-3 lg:w-7">
                  <img src="ArrowUp.png"></img>
                </div>
                <h3 className=" mt-4 font-medium text:xl 2xl:mt-3">
                  {" "}
                  32% from last month
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[300px] rounded-xl bg-slate-50 lg:p-5 2xl:w-[550px] 2xl:h-[280px]">
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
              <h1 className="text-2xl font-extrabold mt-2 2xl:mt-5">
                1 200 000₮
              </h1>
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
      </div>
    </div>
  );
};

export default Cards;
