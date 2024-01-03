import React, { useContext, useEffect, useState } from "react";
import Records from "@/components/Records";
import Navbar from "@/components/Navbar";
import AddRecordForm from "@/components/ModalForm/AddRecordForm";
import { TransactionContext } from "@/Context/TransactionProvider";
import { CategoryContext } from "@/Context/CategoryContext";

const Record = () => {
  const { getAllTransactions, reFetch } = useContext(TransactionContext);
  const { getAllCategories, refresh } = useContext(CategoryContext);

  useEffect(() => {
    console.log("TransacEffect");
    getAllTransactions();
  }, [reFetch]);

  useEffect(() => {
    console.log("CateEffect");
    getAllCategories();
  }, [refresh]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <Records />
    </div>
  );
};

export default Record;
