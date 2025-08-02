import React from "react";
import NavBar from "../NavBar/NavBar";
import General from "./Components/General";

const Setting = () => {
  return (
    <div className="p-2 flex flex-col h-[100vh]">
      <NavBar />
      <div className="">
        <General />
      </div>
    </div>
  );
};

export default Setting;
