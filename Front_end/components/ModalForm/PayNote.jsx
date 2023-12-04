import React from "react";

const PayNote = () => {
  return (
    <div className="lg:mt-3 lg:ml-10">
      <div className="flex flex-col">
        <h className="mt-3">Payee</h>
        <select className="select select-bordered select-sm w-full max-w-xs mt-3">
          <option disabled selected>
            Write here
          </option>
          <option>Small Apple</option>
          <option>Small Orange</option>
          <option>Small Tomato</option>
        </select>
      </div>
      <div className="flex-col mt-10">
        <h1 className="mb-5">Node</h1>
        <div className="card w-96 h-[200px] lg:h-[240px] bg-base-100 shadow-xl ">
          <div className="card-body">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNote;
