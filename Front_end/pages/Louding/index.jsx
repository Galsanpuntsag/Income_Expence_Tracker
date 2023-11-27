import React from "react";
import Link from "next/link";

const Louding = () => {
  return (
    <div className="bg-slate-100 w-full h-screen flex flex-col justify-center items-center gap-5">
      <div className="flex">
        <div className="flex gap-2">
          <img src="Vector.png"></img>
          <h className="text-5xl"> Geld</h>
        </div>
      </div>
      <div className="flex">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
      <div className="">
        <h1>Түр хүлээнэ үү...</h1>
      </div>
    </div>
  );
};

export default Louding;
