import React, { useState } from "react";
import Records from "@/components/Category";
import Navbar from "@/components/Navbar";
import { Context } from "react";

const Record = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col">
      <Navbar handleOpen={handleOpen} />
      <Records open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </div>
  );
};

export default Record;
