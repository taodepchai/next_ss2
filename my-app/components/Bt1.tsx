import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  label: string;
  placeholder: string;
  helperText?: string;
  type?: string;
}

const Bt1: React.FC<InputProps> = ({
  label,
  placeholder,
  helperText,
  type = "text",
}) => {
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type={type}
          placeholder={placeholder}
          className="block w-full pr-10 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          {/* <FontAwesomeIcon icon={faEye} className="text-gray-400" /> */}
        </div>
      </div>
      {helperText && <p className="mt-2 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Bt1;
