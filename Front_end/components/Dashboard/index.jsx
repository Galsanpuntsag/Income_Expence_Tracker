import React from "react";
import ContainCards from "./Cards/ContainCards";
import Charts from "./Charts";
import LastRecordList from "./LastRecordList";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <ContainCards />
      <Charts />
      <LastRecordList />
    </div>
  );
};

export default Dashboard;
