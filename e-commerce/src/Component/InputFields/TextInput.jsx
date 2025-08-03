import React from "react";

const TextInput = React.forwardRef(
  ({ label, placeholder, err, errormessage }, ref) => {
    return (
      <div className="">
        <div className="text-xs font-semibold text-gray-700 mb-1">{label}:</div>
        <input
          className={`border w-full outline-blue-300 text-sm text-gray-600 ${
            err ? "border-red-400" : "border-gray-300"
          } bg-slate-50 rounded-sm p-1 px-2`}
          placeholder={placeholder}
          ref={ref}
        />

        <div className="h-3 text-[9px] font-medium text-red-500 px-2">
          {err && (
            <span>
              {errormessage ? errormessage : "Please provide a valid input"}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default TextInput;
