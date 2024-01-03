import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import AddRecordForm from "@/components/ModalForm/AddRecordForm";
import { UserContext } from "@/Context/UserProvider";
import { TransactionContext } from "@/Context/TransactionProvider";
import { CategoryContext } from "@/Context/CategoryContext";

export default function Home() {
  const { getAllTransactions, reFetch, getTotalExpInc, getChartData } =
    useContext(TransactionContext);
  const { getAllCategories, refresh } = useContext(CategoryContext);

  useEffect(() => {
    console.log("TTTT");
    getAllTransactions();
    getChartData();
  }, [reFetch]);

  useEffect(() => {
    getAllCategories();
    getTotalExpInc();
  }, [refresh]);

  return (
    <main>
      <Navbar />
      <div clasName="bg-slate-200 flex flex-col justify-center ">
        <Dashboard />
      </div>
    </main>
  );
}
