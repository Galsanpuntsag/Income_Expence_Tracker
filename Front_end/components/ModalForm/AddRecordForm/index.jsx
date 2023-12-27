import React, { useState } from "react";
import ExpIncSwitch from "./ExpIncSwitch";
import PayNote from "./Paynote";

const AddRecordForm = ({ open, handleClose }) => {
  return (
    <dialog open={open} className="modal">
      <div className="modal-box max-w-3xl ">
        <div className="flex justify-between border-b-2 border-slate-800">
          <h className="font-bold text-2xl">Add Record </h>
          <form method="dialog">
            <button className="btn mb-1" onClick={handleClose}>
              ✕
            </button>
          </form>
        </div>
        <div className="flex">
          <div className="flex-1">
            <ExpIncSwitch handleClose={handleClose} />
          </div>
          <div className="flex-1">
            <PayNote />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddRecordForm;
