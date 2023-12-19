import React, { useState } from "react";
import PayNote from "./PayNote";
import Expence from "./Expence";
import Income from "./Income";

const Modal = ({ open, handleClose }) => {
  const [showExpense, setShowExpence] = useState("");
  const [showIncome, setShowIncome] = useState("hidden");
  return (
    <div>
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
          <Expence
            setShowExpence={setShowExpence}
            showIncome={showIncome}
            showExpense={showExpense}
            setShowIncome={setShowIncome}
            open={open}
            handleClose={handleClose}
          />
          <Income
            setShowExpence={setShowExpence}
            showIncome={showIncome}
            setShowIncome={setShowIncome}
          />
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
