import React, { useRef } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";

const General = () => {
  const nameRef = useRef();
  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">
          General Information
        </div>
        <div>
          <TextInput
            err={nameRef.current?.value == "" && true}
            errormessage={"Please provide a valid input"}
            label={"Name"}
            placeholder={"Enter your Name"}
          />
          <TextInput
            err={nameRef.current?.value == "" && true}
            errormessage={"Please provide a valid password"}
            label={"Email"}
            placeholder={"Enter your Name"}
          />
          <TextInput
            err={nameRef.current?.value == "" && true}
            errormessage={"Please provide a valid phone Number"}
            label={"Contact Number"}
            placeholder={"Enter your Contact Number"}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center flex-1 gap-3">
        <div className="text-gray-700 font-bold text-xl italic text-center ">
          General Information
        </div>
        <p className="text-gray-500 font-medium text-lg text-justify">
          Update your name, contact number, and email address from this section
          to keep your profile information up to date. Manage your personal
          information here. You can easily update your name, contact number, and
          email address to keep your account details accurate and current.
        </p>
        <div>
          <OrangeButton title={"Update"} />
        </div>
      </div>
    </div>
  );
};

export default General;
