import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserModal from "./UserModal";
import { usePathname } from "next/navigation";
import { IoMdAdd } from "react-icons/io";
import { UserContext } from "@/Context/UserProvider";
import AddRecordForm from "../ModalForm/AddRecordForm";

const Navbar = () => {
  const navigations = [
    {
      name: "Dashboard",
      path: "/",
    },
    { name: "Records", path: "/records" },
  ];
  const isActive = usePathname();
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  if (!user) {
    return null;
  }

  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between bg-slate-50">
        <div className="flex ml-20 p-2">
          <img src="Vector.png"></img>
          <div className="text-center items-center  flex gap-10 ml-10">
            {navigations.map((navigation, i) => (
              <Link
                className={`transaction_all duration-75 ${
                  isActive === navigation.path
                    ? "font-semibold"
                    : "hover:font-semibold"
                }`}
                key={i}
                href={navigation.path}
              >
                {navigation.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-5 items-center mr-20">
          <button
            className="btn btn-active btn-primary font-mono text-sm"
            onClick={() => {
              setOpen(true);
            }}
          >
            <IoMdAdd />
            Add Record
          </button>
          <div className="btn btn-active btn-primary">
            <div className="avatar">
              <div className="w-7 h-7 mt-[2px] rounded-full ring-1 lg:ring-2 ring-success ring-offset-1">
                <img src="https://media.istockphoto.com/id/845452938/photo/businessman-standing-with-umbrella-under-the-money-rain.jpg?s=1024x1024&w=is&k=20&c=jx2IJwWuk41smIjvBuLSJYFAwgEEdptqVITXyGsxUzA=" />
              </div>
            </div>
            {/* <UserModal user={user} /> */}
          </div>
        </div>
      </div>
      <AddRecordForm open={open} closeForm={closeForm} />
    </div>
  );
};

export default Navbar;
