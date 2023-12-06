import React from "react";
import Cards from "./Cards";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2">
      <Cards />
      <Charts />
    </div>
  );
};

export default Dashboard;
