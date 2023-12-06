import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import Link from "next/link";
import NestedModal from "./userPortfolio";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between bg-slate-50">
        <div className="flex ml-20 p-2">
          <img src="Vector.png"></img>
          <div className="text-center items-center  flex gap-10 ml-10">
            <Link href={"/"}>
              <h className="hover:text-primary">Dashboard</h>
            </Link>
            <Link href={"../Record"}>
              {" "}
              <h1 className="hover:text-primary">Records</h1>
            </Link>
            <Link href={"../Portfolio"}>
              {" "}
              <h1 className="hover:text-primary">Portfolio</h1>
            </Link>
          </div>
        </div>
        <div className="flex gap-5 items-center mr-20">
          <button
            className="btn btn-active btn-primary"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <IoMdAdd />
            Add Record
          </button>
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2">
              <img src="https://media.istockphoto.com/id/845452938/photo/businessman-standing-with-umbrella-under-the-money-rain.jpg?s=1024x1024&w=is&k=20&c=jx2IJwWuk41smIjvBuLSJYFAwgEEdptqVITXyGsxUzA=" />
            </div>
          </div>
          <NestedModal />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
