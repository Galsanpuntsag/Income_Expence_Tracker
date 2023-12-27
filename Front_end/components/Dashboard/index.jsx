import React from "react";
import ContainCards from "./Cards/ContainCards";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <ContainCards />
      <Charts />
    </div>
  );
};

export default Dashboard;
