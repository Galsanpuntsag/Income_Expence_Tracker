import React, { useState } from "react";
import PayNote from "./PayNote";
import Expence from "./Expence";
import Income from "./Income";

const Modal = () => {
  const [showExpense, setShowExpence] = useState("");
  const [showIncome, setShowIncome] = useState("hidden");
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box max-w-3xl ">
          <div className="flex justify-between border-b-2 border-slate-800">
            <h className="font-bold text-2xl">Add Record </h>
            <form method="dialog">
              <button className="btn mb-1">✕</button>
            </form>
          </div>
          <Expence
            setShowExpence={setShowExpence}
            showIncome={showIncome}
            showExpense={showExpense}
            setShowIncome={setShowIncome}
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
