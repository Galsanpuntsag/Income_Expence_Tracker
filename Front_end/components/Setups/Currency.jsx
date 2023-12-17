import React, { useContext } from "react";
import { StepContext } from "../../Context/StepContext";

// import Logo from "../Logo";

const Currency = () => {
  const { changeStepData, stepData, changeStep } = useContext(StepContext);
  console.log;

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
          <select
            name="currency_type"
            className="select select-accent w-full max-w-xs"
            value={stepData.currency_type}
            onChange={(e) => {
              console.log("NAME:", e.target.name);
              console.log("VALUE: ", e.target.value);
              changeStepData(e.target.name, e.target.value);
            }}
          >
            <option disabled selected>
              Select currency?
            </option>
            <option value="MNT">MNT - ongolian Tugrik</option>
            <option value="USD">USD - US Dollar</option>
            <option value="CNY">CNY - China Yuan</option>
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
            onClick={changeStep}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
