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
        <div className="flex lg:flex-row p-2 gap-2">
          <img className="w-7 h-7" src="Vector.png"></img>
          <div className="text-center items-center  flex gap-3 lg:gap-10 ">
            {navigations.map((navigation, i) => (
              <Link
                className={`transaction duration-75 text-sm ${
                  isActive === navigation.path
                    ? "font-bold"
                    : "hover:font-black"
                }`}
                key={i}
                href={navigation.path}
              >
                {navigation.name}
              </Link>
            ))}
          </div>
        </div>
        <details className="dropdown">
          <summary className="btn bg-transparent border-none p-1 mr-2">
            <div className="avatar flex justify-between  gap-2">
              <div className="mt-2 w-6 h-6 rounded-full ring-2 ring-success ring-offset-1">
                {user.avatar_img}
                {!user.avatar_img && (
                  <div className="skeleton w-7 h-7 rounded-full shrink-0"></div>
                )}
              </div>
              <div className="flex flex-col mt-2">
                <div className="font-light text-[12px] text-current">
                  {" "}
                  Welcome
                </div>
                <div className="font-medium text-sm text-current">
                  {user.name}
                </div>
              </div>
            </div>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>
                {" "}
                <UserModal user={user} />
              </a>
            </li>
            <li>
              <a>
                <div className="flex flex-col lg:flex-row gap-5 items-center mr-20">
                  <button
                    className="btn btn-active btn-primary font-mono text-sm"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <IoMdAdd />
                    Add Record
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </details>
      </div>
      <AddRecordForm open={open} closeForm={closeForm} />
    </div>
  );
};

export default Navbar;
