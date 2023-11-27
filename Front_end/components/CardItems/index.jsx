import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const CardItems = () => {
  return (
    <div className="mx-auto 2xl:full">
      <div className="flex justify-around gap-10 mt-5 p-5">
        <div className="w-[250px] bg-transparent h-[140px] 2xl:w-[450px] 2xl:h-[200px]">
          <img src="https://media.istockphoto.com/id/656624854/photo/isolated-credit-card-with-chip.jpg?s=1024x1024&w=is&k=20&c=ErLoYI6krIZQMhHxprwjrg0M-kOIq7BGa7uEUjq-maU="></img>
        </div>
        <div className="w-[300px] h-[150px] rounded-xl bg-slate-50 px-4 py-3 2xl:w-[550px] 2xl:h-[280px]">
          <div className="flex flex-col ">
            <div className="flex gap-3 ">
              <div className="mt-1 2xl:mt-3">
                {" "}
                <FaDotCircle />
              </div>
              <h className=" text-s mb-2 2xl:mt-3">Your Income</h>
            </div>
            <div className="border-b-2 border-indigo-500"></div>
            <div className="">
              <h1 className="text-2xl weight-bold mt-2 2xl:mt-5">1 200 000₮</h1>
              <h2 className="text-[10px] weight-bold text-slate-400 2xl:mt-5">
                Your income amount
              </h2>
              <div className="flex gap-5 mt-3 2xl:mt-5">
                <div className="mt-1 2xl:mt-5">
                  {" "}
                  <FaArrowAltCircleUp />
                </div>
                <h3 className="2xl:mt-3"> 32% from last month</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[150px] rounded-xl bg-slate-50 px-4 py-3 2xl:w-[550px] 2xl:h-[280px]">
          <div className="flex flex-col ">
            <div className="flex gap-3 ">
              <div className="mt-1 2xl:mt-3">
                {" "}
                <FaDotCircle />
              </div>
              <h className=" text-s mb-2 2xl:mt-3">Your Income</h>
            </div>
            <div className="border-b-2 border-indigo-500"></div>
            <div className="">
              <h1 className="text-2xl weight-bold mt-2 2xl:mt-5">1 200 000₮</h1>
              <h2 className="text-[10px] weight-bold text-slate-400 2xl:mt-5">
                Your income amount
              </h2>
              <div className="flex gap-5 mt-3 2xl:mt-5">
                <div className="mt-1 2xl:mt-5">
                  {" "}
                  <FaArrowAltCircleUp />
                </div>
                <h3 className="2xl:mt-3"> 32% from last month</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
