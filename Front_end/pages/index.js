import React, { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Modal from "@/components/ModalForm/Modal";

export default function Home() {
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
        <Modal open={open} handleClose={handleClose} />
      </div>
    </main>
  );
}
