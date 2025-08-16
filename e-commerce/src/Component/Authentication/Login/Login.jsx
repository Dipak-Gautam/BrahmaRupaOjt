import React, { useRef, useState } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router";
import loginApi from "../../Api/Auth/loginApi";

const Login = ({ setScreen }) => {
  const navigate = useNavigate();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(0);
  const handleLogin = () => {
    if (userNameRef.current?.value == "") {
      setErr(1);
    } else if (passwordRef.current?.value == "") {
      setErr(2);
    } else {
      setErr(0);
      loginApi(
        {
          userName: userNameRef.current.value,
          password: passwordRef.current.value,
        },
        navigate,
        setErr
      );
    }
  };
  return (
    <div className="p-3">
      <div className="text-center text-xl text-orange-500 font-bold">Login</div>
      <div>
        <TextInput
          err={err == 1 && true}
          label={"UserName"}
          placeholder={"Enter UserName"}
          errormessage={"Please provide valid userName"}
          ref={userNameRef}
        />
        <TextInput
          err={err == 2 && true}
          label={"Password"}
          placeholder={"Enter Password"}
          errormessage={"Provide Password"}
          ref={passwordRef}
        />
      </div>
      <div className="flex justify-center my-1">
        <OrangeButton title={"Login"} onClick={() => handleLogin()} />
      </div>
      <div className="text-xs font-medium text-center text-gray-500 my-2">
        Do not have account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => setScreen(true)}
        >
          Signup
        </span>
      </div>
      {err == 3 && (
        <p className="text-[10px] text-red-500 text-center">
          Invalid User Name or password
        </p>
      )}
    </div>
  );
};

export default Login;
