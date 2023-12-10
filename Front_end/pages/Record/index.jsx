import React from "react";
import Records from "@/components/Category";
import Navbar from "@/components/Navbar";

const Record = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Records />
    </div>
  );
};

export default Record;
