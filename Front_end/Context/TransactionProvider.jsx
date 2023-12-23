import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState({
    name: "Food",
    amount: "",
    transaction_type: "EXP",
    description: "tsuivan idlee",
    category_id: "",
    updated_at: "",
  });
  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    console.log("VAL", value);
    console.log("KER", key);
  };

  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const addTransaction = async () => {
    if (!transactionData.amount || !transactionData.transaction_type) {
      alert("Та гүйлгээнийхээ нэр эсвэл төрөлийг сонгоно уу");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/transactions", {
        ...transactionData,
        user_id: "db7f3ac8-72f8-45dd-b8cc-b1a56876b545",
      });
      console.log("dataTRANcome");
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      console.log("ERRtran", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTransactions = async () => {
    console.log(WORKING);
    try {
      const {
        data: { transactions },
      } = await axios.get(
        "http://localhost:8008/transactions/db7f3ac8-72f8-45dd-b8cc-b1a56876b545"
      );
      console.log("TARget");
      setTransactionData(transactions);
    } catch (error) {
      console.log("ERROR", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  useEffect(() => {
    console.log("TTTT");
    getTransactions();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
