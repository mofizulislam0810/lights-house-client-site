import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import DashboardHome from "../DashboardHome/DashboardHome";

const Dashboard = () => {
  return (
    <div>
      <Navigation></Navigation>
      <DashboardHome></DashboardHome>
    </div>
  );
};

export default Dashboard;
