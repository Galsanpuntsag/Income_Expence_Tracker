import React from "react";

import { TiEye } from "react-icons/ti";
import { IoMdArrowDropright } from "react-icons/io";
import { array } from "@/components/Data/index.jsx";
import { types } from "@/components/Data/index.jsx";

import AmountRange from "./AmountRange";
import Modal from "@/components/ModalForm/ctgryForm/Modal";

const LeftCategory = () => {
  return (
    <div className="">
      {" "}
      <div className="artboard phone-4 2xl:phone-6 bg-white 2xl:mt-8 rounded-xl 2xl:ml-40 flex flex-col justify-between ">
        <div className="mx-10">
          <div className="">
            <div className="flex flex-col gap-3 ">
              <h className="mt-5 text-2xl font-black">Records</h>
              <button
                className="btn bg-primary  w-full lg:max-w-[283px] 2xl:max-w-xs"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                + Add
              </button>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2  ">
            <h1 className="mt-1 2xl:mt-5 text-2xl font-bold">Types</h1>
            <div className="">
              {types.map((el) => {
                return (
                  <div className="flex text-center gap-5">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkbox mb-1 2xl:mb-4"
                    ></input>
                    <h className=" font-bold ">{el.name}</h>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className=" 2xl:mt-5 text-2xl font-bold flex flex-col justify-between">
              <div className="flex justify-around mb-5">
                <h className="">Category</h>
                <button className="text-slate-200">Clear</button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-around">
                {array.map((el) => {
                  return (
                    <div className="flex justify-between tex-2xl">
                      <TiEye />
                      <h1 className="flex flexcol">{el.name}</h1>
                      <IoMdArrowDropright />
                    </div>
                  );
                })}
              </div>

              <div className="">
                <AmountRange />
              </div>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default LeftCategory;
