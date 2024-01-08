import React from "react";

import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div clasName="bg-slate-200 flex flex-col justify-center ">
        <Dashboard />
      </div>
    </main>
  );
}
