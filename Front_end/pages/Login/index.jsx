import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "@/Context/UserProvider";

const Login = () => {
  const { changeLoginUserData, login, formUserData } = useContext(UserContext);

  const router = useRouter();
  return (
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
            <h1 className="text-[24px]">Welcome Back</h1>
            <h2 className="16px">Welcome back, Please enter your details</h2>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formUserData.email}
              onChange={(e) => {
                changeLoginUserData(e.target.name, e.target.value);
              }}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formUserData.password}
              onChange={(e) => {
                changeLoginUserData(e.target.name, e.target.value);
              }}
              className="input input-bordered input-warning w-full max-w-xs"
            />
          </div>
          <div className="">
            <button
              onClick={login}
              className="btn btn-accent w-full max-w-xs px-10"
            >
              Login
            </button>
          </div>
          <div className="flex gap-4">
            <h3>Don't have account?</h3>
            <button
              onClick={() => router.push("/Signup")}
              className="text-blue-600"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 w-full h-screen"></div>
    </div>
  );
};

export default Login;
