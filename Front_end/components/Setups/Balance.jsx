import React from "react";
import Link from "next/link";

const Balance = ({ nextStep }) => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <div className="mt-10 gap-5 flex flex-col justify-center items-center">
          <div className="">
            <img className="bg-blue-700 rounded-full p-3" src="Coins.png"></img>
          </div>
          <div className="">
            <h>Set up your cash Balance</h>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-2xl px-10"
            />
          </div>
          <div className="">
            <h1>How much cash do you have in your wallet?</h1>
          </div>
          <div className="">
            <button
              className="btn bg-blue-700 w-full text-slate-100 max-w-xs"
              onClick={nextStep}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
