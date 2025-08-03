import React from "react";
import MainAuth from "./Component/Authentication/MainAuth";
import { Outlet } from "react-router";

const Home = () => {
  const token = localStorage.getItem("token");
  return <div className="h-[100vh]">{token ? <Outlet /> : <MainAuth />}</div>;
};

export default Home;
