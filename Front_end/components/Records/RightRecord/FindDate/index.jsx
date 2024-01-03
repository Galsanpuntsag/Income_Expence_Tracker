import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const FindDate = () => {
  return (
    <div className="">
      <div className="flex justify-between mt-4 2xl:mt-8">
        <div className="flex gap-3 ml-6 mt-3">
          <button className="w-5 h-5 bg-slate-400 rounded-md ml-5">
            <IoIosArrowBack />
          </button>
          <h className="font-bold "> Last 30 Days</h>
          <button className="w-5 h-5 bg-slate-400 rounded-md">
            <IoIosArrowForward />
          </button>
        </div>
        <select className="select select-bordered w-full max-w-xs mr-5">
          <option disabled selected>
            Newest first
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="mt-10 mx-10 bg-slate-200 rounded-xl p-3 w-11/12 h-1-">
          <div className="flex justify-between ">
            <div className="flex w-full gap-5 ">
              <button className="">
                <input type="checkbox" checked="checked" className="checkbox" />
              </button>
              <h> Select All</h>
            </div>
            <button>35000₮</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDate;
