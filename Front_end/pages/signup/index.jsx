import Link from "next/link";
import React, { useContext, useState } from "react";
import { UserContext } from "@/Context/UserProvider";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";

const Signup = () => {
  const { formUserData, signup, loading, changeLoginUserData } =
    useContext(UserContext);
  const router = useRouter();

  return (
    <div>
      <div className="flex ">
        <div className="bg-slate-100 w-full h-screen flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center gap-5">
            <Logo />
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
                value={formUserData.name}
                onChange={(e) => {
                  changeLoginUserData(e.target.name, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formUserData.email}
                onChange={(e) => {
                  changeLoginUserData(e.target.name, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formUserData.password}
                onChange={(e) => {
                  changeLoginUserData(e.target.name, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="rePassword"
                name="rePassword"
                value={formUserData.rePassword}
                onChange={(e) => {
                  changeLoginUserData(e.target.name, e.target.value);
                }}
                className="input input-bordered input-success w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col">
              <button
                onClick={signup}
                disabled={loading}
                className="btn btn-accent w-full max-w-xs px-10"
              >
                Sign up
              </button>

              <div className="flex gap-4">
                <h3 className="text-[#334155]">Already have account?</h3>
                <button
                  onClick={() => router.push("/login")}
                  className="text-blue-400 hover:text-blue-600"
                >
                  {" "}
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 w-full h-screen"></div>
      </div>
    </div>
  );
};

export default Signup;
