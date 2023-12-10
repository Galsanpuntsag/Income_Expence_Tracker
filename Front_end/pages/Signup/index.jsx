import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="flex ">
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="">
              <div className="flex gap-2">
                <img src="Vector.png"></img>
                <h className="text-5xl"> Geld</h>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-[24px]">Create Geld Account</h1>
              <h2 className="16px">
                Sign up below to create your Wallet account
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Re-password"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="">
              <button className="btn btn-accent w-full max-w-xs px-10">
                <Link set href={"../Login"}>
                  Login
                </Link>
              </button>
            </div>
            <div className="flex gap-4">
              <h3>Don't have account?</h3>
              <h4 className="text-blue-600">
                <Link href={"../Login"}>Sign up</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 w-full h-screen"></div>
      </div>
    </div>
  );
};

export default Signup;
