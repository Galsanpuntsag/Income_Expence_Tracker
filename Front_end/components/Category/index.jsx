import React from "react";
import LeftCategory from "./LeftCategory";
import RightRecord from "./RightRecords";

const Records = ({ handleClose, open, handleOpen }) => {
  return (
    <div div className="flex flex-col md:flex-row w-full mt-10 justify-center">
      <div className="ml-10">
        <LeftCategory
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </div>
      <div className="w-10/12 flex justify-center">
        <RightRecord />
      </div>
    </div>
  );
};

export default Records;
