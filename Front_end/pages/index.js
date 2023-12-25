import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import AddRecordForm from "@/components/ModalForm/AddRecordForm";
import { UserContext } from "@/Context/UserProvider";

export default function Home() {
  const router = useRouter();
  const { user, setUser, formUserData, changeUserData } =
    useContext(UserContext);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <main>
      <Navbar handleOpen={handleOpen} />
      <div clasName="bg-slate-200 flex flex-col justify-center ">
        <Dashboard />
        <AddRecordForm
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </div>
    </main>
  );
}
