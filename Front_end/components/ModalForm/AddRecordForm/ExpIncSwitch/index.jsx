import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "@/Context/TransactionProvider";
import { CategoryContext } from "@/Context/CategoryContext";
import { getIcons, thousandify } from "@/utils";
import { Form } from "@/components/Records/LeftCategory/CtgryList/Form";

const ExpIncSwitch = ({ closeForm }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const categoryClose = () => {
    setOpenCategory(false);
  };
  const {
    changeTransactionData,
    transactionData,
    addTransaction,
    transactionList,
  } = useContext(TransactionContext);
  const { category, displayCate, setDisplayCate } = useContext(CategoryContext);
  console.log("CATeRRR", category);

  const AddRecord = async () => {
    await addTransaction();
    console.log("CLOSE");
    closeForm();
  };

  return (
    <div>
      <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
        <button
          className={`flex-1 btn-md rounded-3xl border-none  ${
            transactionData.transaction_type === "EXP" &&
            "bg-[#0166FF] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "EXP");
          }}
        >
          Expense
        </button>
        <button
          className={`flex-1 btn-md rounded-3xl border-none ${
            transactionData.transaction_type === "INC" &&
            "bg-[#228822] text-white"
          }`}
          onClick={() => {
            changeTransactionData("transaction_type", "INC");
          }}
        >
          Income
        </button>
      </div>
      <form>
        <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
          <h1>Amount</h1>
          <input
            type="number"
            className="bg-[#F9FAFB] border-none"
            placeholder="$ 000,0"
            value={thousandify(transactionData.amount)}
            name="amount"
            onChange={(e) => {
              console.log(e.target.name, e.target.value);
              changeTransactionData(e.target.name, e.target.value);
            }}
          />
        </div>
        <h1 className="mt-4 mb-2 font-semibold">Category</h1>
        <details className="dropdown w-full">
          <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
            <div className="flex items-center gap-2">
              {/* {displayCate ? displayCate : el.category_img} */}
            </div>
          </summary>
          <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
            <div className="flex flex-col justify-center items-center">
              <div>
                <button
                  className="font-extrabold text-xl border-b w-full my-1 border-black"
                  onClick={() => {
                    setOpenCategory(true);
                  }}
                >
                  + Add Category
                </button>
                {/* <Form /> */}
              </div>

              {category.map((el) => (
                <button
                  key={el.id}
                  className={`w-5/6 p-1 rounded-xl  font-bold text-sm flex justify-center ml-3 items-center my-2 gap-3 hover:opacity-50 ${el.category_color}`}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("categoryEL.id", el.id);
                    changeTransactionData("category_id", el.id);
                  }}
                >
                  {" "}
                  {getIcons(el.category_img, el.category_color)}
                  {el.iconname}
                </button>
              ))}
            </div>
          </ul>
        </details>
        <div className="flex">
          <div className="flex-1">
            <label className="label">
              <span className="text-base label-text">Date</span>
            </label>
            <input
              type="datetime-local"
              placeholder="Oct 30,2023"
              className="w-full input input-bordered bg-[#F9FAFB]"
              name="updated_at"
              onChange={(e) => {
                console.log("first", e.target.value);
                changeTransactionData(e.target.name, e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <button
        onClick={AddRecord}
        className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
          transactionData.transaction_type === "INC"
            ? "bg-[#228822]"
            : "bg-[#0166FF]"
        }`}
      >
        Add Record
      </button>
    </div>
    // <div>
    //   <div className="flex my-3 rounded-full bg-[#F3F4F6] w-full gap-5 ">
    //     <button
    //       className={`flex-1 btn-md rounded-3xl border-none  ${
    //         transactionData.transaction_type === "EXP" &&
    //         "bg-[#0166FF] text-white"
    //       }`}
    //       onClick={() => {
    //         changeTransactionData("transaction_type", "EXP");
    //       }}
    //     >
    //       Expense
    //     </button>
    //     <button
    //       className={`flex-1 btn-md rounded-3xl border-none ${
    //         transactionData.transaction_type === "INC" &&
    //         "bg-[#228822] text-white"
    //       }`}
    //       onClick={() => {
    //         changeTransactionData("transaction_type", "INC");
    //       }}
    //     >
    //       Income
    //     </button>
    //   </div>
    //   <form>
    //     <div className="border-[1px] p-3 bg-[#F9FAFB] rounded-lg">
    //       <h1>Amount</h1>
    //       <input
    //         type="number"
    //         className="bg-[#F9FAFB] border-none"
    //         placeholder="$ 000,0"
    //         value={thousandify(transactionData.amount)}
    //         name="amount"
    //         onChange={(e) => {
    //           console.log(e.target.name, e.target.value);
    //           changeTransactionData(e.target.name, e.target.value);
    //         }}
    //       />
    //     </div>
    //     <h1 className="mt-4 mb-2 font-semibold">Category</h1>
    //     <details className="dropdown w-full">
    //       <summary className="m-1 flex items-center bg-[#F9FAFB] justify-between btn ">
    //         <div className="flex items-center gap-2">
    //           {/* {displayCate ? displayCate : el.category_img} */}
    //         </div>
    //       </summary>
    //       <ul className="shadow menu w-full dropdown-content z-[1] bg-base-100 rounded-box">
    //         <div className="flex flex-col justify-center items-center">
    //           <div>
    //             <button
    //               className="font-extrabold text-xl border-b w-full my-1 border-black"
    //               onClick={() => {
    //                 setOpenCategory(true);
    //               }}
    //             >
    //               + Add Category
    //             </button>
    //           </div>

    //           {category.map((el) => (
    //             <button
    //               key={el.id}
    //               className={`w-5/6 p-1 rounded-xl  font-bold text-sm flex justify-center ml-3 items-center my-2 gap-3 hover:opacity-50 ${el.category_color}`}
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 console.log("categoryEL.id", el.id);
    //                 changeTransactionData("category_id", el.id);
    //               }}
    //             >
    //               {" "}
    //               {getIcons(el.category_img, el.category_color)}
    //               {el.iconname}
    //             </button>
    //           ))}
    //         </div>
    //       </ul>
    //     </details>
    //     <div className="flex">
    //       <div className="flex-1">
    //         <label className="label">
    //           <span className="text-base label-text">Date</span>
    //         </label>
    //         <input
    //           type="datetime-local"
    //           placeholder="Oct 30,2023"
    //           className="w-full input input-bordered bg-[#F9FAFB]"
    //           name="updated_at"
    //           onChange={(e) => {
    //             console.log("first", e.target.value);
    //             changeTransactionData(e.target.name, e.target.value);
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </form>
    //   <button
    //     onClick={AddRecord}
    //     className={`px-2 py-3 modal-backdrop w-full font-normal my-4 text-white rounded-full hover:cursor-pointer hover:opacity-70 ${
    //       transactionData.transaction_type === "INC"
    //         ? "bg-[#228822]"
    //         : "bg-[#0166FF]"
    //     }`}
    //   >
    //     Add Record
    //   </button>
    // </div>
    // {/* <Form categoryClose={categoryClose} openCategory={openCategory} /> */}
  );
};

export default ExpIncSwitch;
