import React, { useEffect, useState } from "react";
import MainAuth from "./Component/Authentication/MainAuth";
import { Outlet } from "react-router";
import productDataApi from "./Component/Api/productData.api";

const Home = () => {
  const token = localStorage.getItem("token");
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    productDataApi(setMainData);
  }, [token]);
  return (
    <div className="h-[100vh]">
      {token ? <Outlet context={mainData} /> : <MainAuth />}
    </div>
  );
};

export default Home;
