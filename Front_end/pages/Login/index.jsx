import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <Link href={"/"}>
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
                placeholder="Email"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered input-warning w-full max-w-xs"
              />
            </div>
            <div className="">
              <button className="btn btn-accent w-full max-w-xs px-10">
                <Link href={"../Louding"}>Login</Link>
              </button>
            </div>
            <div className="flex gap-4">
              <h3>Don't have account?</h3>
              <h4 className="text-blue-600">
                <Link href={"../Signup"}>Sign Up</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 w-full h-screen"></div>
      </div>
    </Link>
  );
};

export default Login;
