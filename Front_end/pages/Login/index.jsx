import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [change, setChange] = useState("");

  const handleChange = () => {
    setTimeout(() => {
      router.push("../Steps");
    }, 4000);

    router.push("./Louding");
  };

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
            <button
              onClick={handleChange}
              className="btn btn-accent w-full max-w-xs px-10"
            >
              <Link onClick={handleChange} href={"./Login"}>
                Login
              </Link>
            </button>
          </div>
          <div className="flex gap-4">
            <h3>Don't have account?</h3>
            <button className="text-blue-600">
              <Link href={"../Signup"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 w-full h-screen"></div>
    </div>
  );
};

export default Login;
