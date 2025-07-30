import React from "react";

const OrangeButton = ({ title, ...props }) => {
  return (
    <div
      {...props}
      className="bg-orange-500 text-white font-semibold text-sm  py-1 px-3 w-fit rounded-md hover:bg-amber-600 shadow-sm shadow-orange-500/50 cursor-pointer"
    >
      {title}
    </div>
  );
};

export default OrangeButton;
