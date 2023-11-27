import React from "react";

const RecordRange = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col justify-center w-full mx-20">
        <div className="">
          <h className="">Last Records</h>
          <div className="border-b-2 border-indigo-500 "></div>
        </div>
        <div className="">
          <div className="flex justify-between mt-3">
            <div className="flex">
              <img className="bg-blue-500 rounded-full" src="House.png"></img>
              <div className="ml-4">
                <h1 className="">Lending & Rending</h1>
                <h2 className="text-[10px] text-slate-400">3 hours ago</h2>
              </div>
            </div>
            <div className="text-green-300">-10000 ₮</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordRange;
