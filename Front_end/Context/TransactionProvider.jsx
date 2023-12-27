import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { toast } from "react-toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState({
    transaction_name: "Food",
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

  const [transactionList, setTransactionList] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  const { user } = useContext(UserContext);

  const addTransaction = async () => {
    if (!transactionData.amount || !transactionData.transaction_type) {
      alert("Та гүйлгээнийхээ нэр эсвэл төрөлийг сонгоно уу");
      return;
    }
    try {
      console.log("transDta irle", transactionData);
      const { data } = await axios.post("http://localhost:8008/transactions", {
        ...transactionData,
        user_id: user.id,
      });
      console.log("dataTRANcome", data);
      // setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      console.log("ERRtran", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllTransactions = async () => {
    try {
      console.log("TARget", user.id);
      const {
        data: { transactions },
      } = await axios.get(`http://localhost:8008/transactions/` + user.id);
      console.log("RRR", transactions);
      setTransactionList(transactions);
    } catch (error) {
      console.log("ERROR", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  useEffect(() => {
    console.log("TTTT");
    getAllTransactions();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactionList,
        transactionData,
        changeTransactionData,
        addTransaction,
        reFetch,
        setReFetch,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
