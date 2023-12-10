import React from "react";
import Link from "next/link";

const Currency = ({ nextStep }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="mt-10 gap-5 flex flex-col justify-center items-center">
        <div className="">
          <img className="bg-blue-700 rounded-full p-3" src="Coins.png"></img>
        </div>
        <div className="">
          <h>Select base currency</h>
        </div>
        <div className="">
          <select className="select select-accent w-full max-w-xs">
            <option disabled selected>
              Could you choose your base currency?
            </option>
            <option>MNT-Mongolian Tugrik</option>
            <option>Dark mode</option>
            <option>Light mode</option>
          </select>
        </div>
        <div className="max-w-lg text-center">
          <h1>
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </h1>
        </div>
        <div className="">
          <button
            className="btn btn-success w-full max-w-xs"
            onClick={nextStep}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
