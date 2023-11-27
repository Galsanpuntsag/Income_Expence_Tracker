import React from "react";

const SetupSucces = () => {
  return (
    <div>
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
      <div className="form-control gap-5">
        <label className="flex flex-col">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox checkbox-info rounded-full p-10"
          />
          <span className="text-xl">Good Job!</span>
        </label>
      </div>
    </div>
  );
};

export default SetupSucces;
