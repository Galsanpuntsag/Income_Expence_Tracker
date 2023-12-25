import React, { useContext } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TransactionContext } from "@/Context/TransactionProvider";

const RightRecord = () => {
  const { transactionList } = useContext(TransactionContext);

  return (
    <div className="flex flex-col justify-between w-full 2xl:mr-[200px] md:mx-10 bg-white mt-4 2xl:mt-8 rounded-xl">
      <div className="">
        <div className="flex justify-between mt-4 2xl:mt-8">
          <div className="flex gap-3 ml-6 mt-3">
            <button className="w-5 h-5 bg-slate-400 rounded-md ml-5">
              <IoIosArrowBack />
            </button>
            <h className="font-bold "> Last 30 Days</h>
            <button className="w-5 h-5 bg-slate-400 rounded-md">
              <IoIosArrowForward />
            </button>
          </div>
          <select className="select select-bordered w-full max-w-xs mr-5">
            <option disabled selected>
              Newest first
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="mt-10 mx-10 bg-slate-200 rounded-xl p-3 w-11/12 h-1-">
            <div className="flex justify-between ">
              <div className="flex w-full gap-5 ">
                <button className="">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                </button>
                <h> Select All</h>
              </div>
              <button>35000₮</button>
            </div>
          </div>

          <div className="">
            <div className="card w-full shadow-xl mt:5 2xl:mt-10 ">
              <div className="card-body">
                <h1 className="font-semibold "> Today</h1>
                {transactionList.map((transaction, i) => {
                  return (
                    <div>
                      <div> {transaction.id}</div>
                      <div> {transaction.name}</div>
                      <div> {transaction.amount}</div>
                    </div>
                  );
                })}

                {/* {array2.map((el) => {
                  return (
                    <div>
                      <div className="flex justify-between bg-slate-200 w-11/12 rounded-xl gap-10 my-3 ml-10 p-1">
                        <div className="flex gap-5">
                          <input
                            type="checkbox"
                            checked=""
                            className="chechbox ml-3"
                          />
                          <div
                            className={`w-10 h-10 rounded-full flex mt-1 justify-center items-center ${el.color}`}
                          >
                            {el.icon}
                          </div>
                          <div className="flex flex-col">
                            <h className="">{el.category}</h>
                            <div className="font-thin text-xs">{el.time}</div>
                          </div>
                        </div>
                        <div
                          className={`font-bold mr-5 flex items-center ${el.textcolor}`}
                        >
                          {el.price}₮
                        </div>
                      </div>
                    </div>
                  );
                })} */}
                <h1 className="font-semibold "> Yesterday</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightRecord;
