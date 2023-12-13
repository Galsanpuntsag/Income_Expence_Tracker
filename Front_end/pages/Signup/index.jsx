import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "@/components/Context/UserPtovider";

const Signup = () => {
  const { changeSignupUserData, signup } = useContext(UserContext);

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
                name="name"
                onChange={(e) => {
                  changeSignupUserData(e.target.name, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={changeSignupUserData.name}
                onChange={(e) => {
                  changeSignupUserData(e.target.email, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={changeSignupUserData.name}
                onChange={(e) => {
                  changeSignupUserData(e.target.password, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Re-password"
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="">
              <button className="btn btn-accent w-full max-w-xs px-10">
                <Link href={"../Login"}> Login</Link>
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
