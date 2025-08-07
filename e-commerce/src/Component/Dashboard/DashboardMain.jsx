import React, { useEffect, useState } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";
import getOrderApi from "../Api/order/getOrderApi";

const DashboardMain = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    getOrderApi(setOrderData);
  }, []);
  return (
    <div className="flex h-[100vh] bg-sky-50">
      <DashNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {activeScreen == 1 && <Dashboard />}
      {activeScreen == 2 && <Order orderData={orderData} />}
    </div>
  );
};

export default DashboardMain;
