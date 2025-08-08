import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const MainAuth = () => {
  const prevLogin = localStorage.getItem("prevLogin");
  const [screen, setScreen] = useState(prevLogin ? false : true);
  return (
    <div className="flex h-[100vh] justify-center items-center bg-[url('./loginPhoto.jpg')] bg-no-repeat bg-cover">
      <div className="w-80 border border-slate-400 rounded-xl shadow-lg shadow-black/50 bg-white/70 ">
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <Login setScreen={setScreen} />
        )}
      </div>
    </div>
  );
};

export default MainAuth;
