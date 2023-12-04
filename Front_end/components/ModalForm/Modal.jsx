import React, { useState } from "react";
import PayNote from "./PayNote";
import Expence from "./Expence";
import Income from "./Income";

const Modal = () => {
  const [showExpense, setShowExpence] = useState();
  const [showIncome, setShowIncome] = useState("hidden");
  const [open, setOpen] = useState(true);
  return (
    <div>
      <dialog id="my_modal_4" open={open} className="modal">
        <div className="modal-box max-w-3xl ">
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                ✕
              </button>
            </form>
            <Expence
              setShowExpence={setShowExpence}
              showIncome={showIncome}
              setShowIncome={setShowIncome}
            />

            <form method="dialog" className="modal-backdrop">
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
