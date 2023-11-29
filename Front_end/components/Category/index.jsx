import React from "react";
import LeftCategory from "./LeftCategory";
import RightRecord from "./RightRecords";

const Records = () => {
  return (
    <div div className="flex flex-col md:flex-row w-full mt-10 justify-center">
      <div className="ml-10">
        <LeftCategory />
      </div>
      <div className="w-10/12 flex justify-center">
        <RightRecord />
      </div>
    </div>
  );
};

export default Records;
