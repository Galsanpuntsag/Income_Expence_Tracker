import myAxios from "@/utils/axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserProvider";
import { toast } from "react-toastify";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [expData, setExpData] = useState();
  const [incData, setIncData] = useState();
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
      } = await myAxios.get("/transactions/" + user.id);

      setTransactionList(transactions);
    } catch (error) {
      console.log("ERROR", error);
      // toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTotalExpInc = async () => {
    console.log("gettotalexpinc");
    try {
      const {
        data: { totalExp, totalInc },
      } = await myAxios.get("/transactions/total/" + user.id);
      setExpData(totalExp);
      setIncData(totalInc);
      console.log("EXPincCome", totalExp);
      console.log("INCdta", totalInc);
    } catch (error) {
      console.log("ERRexpinc", error);
    }
  };

  const [barChartData, setBarChartData] = useState(null);
  const [doughnutChartData, setDoughnutData] = useState(null);

  const getChartData = async () => {
    try {
      const {
        data: { barChart, doughnutChart },
      } = await myAxios.get("/transactions/chartdata/" + user.id);

      console.log("BArData", barChartData);
      setBarChartData(barChart);
      setDoughnutData(doughnutChart);
    } catch (error) {
      console.log("err", error);
    }
    console.log("BARrr", barChartData);
  };

  useEffect(() => {
    getTotalExpInc();
    // getChartData();
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
        getAllTransactions,
        expData,
        getTotalExpInc,
        incData,
        getChartData,
        barChartData,
        doughnutChartData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
