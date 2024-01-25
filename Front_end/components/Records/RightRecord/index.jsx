import React, { useContext } from "react";

import { TransactionContext } from "@/Context/TransactionProvider";
import FindDate from "./FindDate";
import ListData from "./ListData";

const RightRecord = () => {
  const { transactionList } = useContext(TransactionContext);
  console.log("TransDataIrleHASFDHAGS", transactionList);

  return (
    <div className="flex flex-col w-full 2xl:mr-[200px] md:mx-10 bg-white mt-4 2xl:mt-8 rounded-xl">
      <FindDate />
      <ListData transactionList={transactionList} />
    </div>
  );
};

export default RightRecord;
