import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { StepContext } from "@/Context/StepContext";
// import { useRouter } from "next/router";

const Success = () => {
  const { goToDashboard } = useContext(StepContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="form-control justify-center gap-5 mt-20">
        <label className="flex flex-col">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox checkbox-primary rounded-full ml-5 p-10"
          />
          <span className="text-3xl font-extrabold mt-4">Good Job!</span>
        </label>
      </div>
      <div className="flex flex-col max-w-sm text-center mt-10">
        <h className="font-medium text-lg mb-5">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </h>

        <Button
          variant="contained"
          color="primary"
          className="bg-blue-700 mt-5"
          onClick={goToDashboard}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;
