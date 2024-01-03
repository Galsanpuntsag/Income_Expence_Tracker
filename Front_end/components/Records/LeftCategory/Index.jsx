import React, { useState, useContext } from "react";

import CtgryList from "./CtgryList";
import CtgryTop from "./CtgryTop";
import Range from "./Range";

const LeftCategory = () => {
  return (
    <div className="artboard phone-6 bg-white lg:mt-4 2xl:mt-8 rounded-xl 2xl:ml-40 flex flex-col justify-between ">
      <div className="mx-10">
        <CtgryTop />
        <CtgryList />

        <Range />
      </div>
    </div>
  );
};

export default LeftCategory;
