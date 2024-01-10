import React from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import LastRecordList from "./LastRecordList";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Cards />
      <Charts />
      <LastRecordList />
    </div>
  );
};

export default Dashboard;
