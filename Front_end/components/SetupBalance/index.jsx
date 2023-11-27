import React from "react";
import Link from "next/link";

const Setup_1 = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-col mt-20 gap-10 mb-20">
          <div className="flex gap-2">
            <img src="Vector.png"></img>
            <h className="text-5xl"> Geld</h>
          </div>
          <div className="">
            <ul className="steps">
              <li className="step step-primary">Currency</li>
              <li className="step step-primary">Balance</li>
              <li className="step">Finish</li>
            </ul>
          </div>
        </div>
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
              className="input input-bordered input-secondary w-full max-w-2xl px-10"
            />
          </div>
          <div className="">
            <h1>How much cash do you have in your wallet?</h1>
          </div>
          <div className="">
            <button className="btn btn-success w-full max-w-xs">
              <Link href={"../Finish"}></Link>Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup_1;
