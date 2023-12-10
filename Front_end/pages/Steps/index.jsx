import React from "react";
import Currency from "@/components/Setups/Currency";
import Balance from "@/components/Setups/Balance";
import Success from "@/components/Setups/Success";

const Steps = () => {
  const [step, setStep] = React.useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="  ">
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-slate-100 gap-10">
        <div className="flex mb-5 gap-2">
          <img src="Vector.png"></img>
          <h className="text-5xl"> Geld</h>
        </div>
        <div className="flex flex-col mb-10">
          <ul className="steps">
            <li className={`step step-primary`}>Currency</li>
            <li
              className={`step ${step === 2 && "step-primary"} ${
                step === 3 && "step-primary"
              } `}
            >
              Balance
            </li>
            <li className={`step ${step === 3 && "step-primary"}`}>Finish</li>
          </ul>
          {step === 1 && <Currency nextStep={nextStep} />}
          {step === 2 && <Balance nextStep={nextStep} />}
          {step === 3 && <Success nextStep={nextStep} />}
        </div>
      </div>
    </div>
  );
};

export default Steps;
