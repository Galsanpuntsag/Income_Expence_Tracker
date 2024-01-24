import myAxios from "@/utils/axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { toast } from "react-toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionData, setTransactionData] = useState({
    transaction_name: "",
    amount: "",
    transaction_type: "INC",
    description: "",
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

  //Exp_Inc statiig zarlav
  const [expData, setExpData] = useState();
  const [incData, setIncData] = useState();

  const addTransaction = async () => {
    if (!transactionData.amount || !transactionData.transaction_type) {
      alert("Та гүйлгээнийхээ нэр эсвэл төрөлийг сонгоно уу");
      return;
    }
    try {
      const { data } = await myAxios.post("/transactions", {
        ...transactionData,
        user_id: user.id,
      });
      console.log("dataTRANcome", data);
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      console.log("ERRtran", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getAllTransactions = async () => {
    try {
      const {
        data: { transactions },
      } = await myAxios.get("/transactions/" + user.id); // user.id
      console.log("TRTRTR", transactions);
      setTransactionList(transactions);
    } catch (error) {
      console.log("ERROR", error);
      // toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTotalExpInc = async () => {
    console.log("gettotalexpinc_working");
    try {
      const {
        data: { totalExp, totalInc },
      } = await myAxios.get("/transactions/total/" + user.id);
      console.log("EXPincComeeeeww", totalExp);
      console.log("INCdtaaaaaww", totalInc);
      setExpData(totalExp);
      setIncData(totalInc);
    } catch (error) {
      console.log("ERRexpinc", error);
    }
  };

  useEffect(() => {
    getAllTransactions();
    getTotalExpInc();
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
        getAllTransactions,
        getTotalExpInc,
        expData,
        incData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
