"use client";
import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface SelectProps {
  label: string;
  options: number[];
  onClear: () => void;
  onApply: () => void;
}

const Bt2: React.FC<SelectProps> = ({ label, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleToggleOption = (value: number) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="w-64">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm p-2">
          {/* <FontAwesomeIcon icon={faClock} className="text-gray-400 mr-2" /> */}
          <input
            type="text"
            className="flex-grow focus:outline-none"
            readOnly
            placeholder="Select option"
            value={selectedOptions.join(", ")}
          />
          {/* <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" /> */}
        </div>
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <div key={option} className="flex items-center p-2">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleToggleOption(option)}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">{option}</label>
            </div>
          ))}
          <div className="flex justify-between p-2 border-t border-gray-300">
            <button
              onClick={() => {
                setSelectedOptions([]);
              }}
              className="text-sm text-gray-700 px-4 py-2 rounded-md border border-gray-300"
            >
              Clear
            </button>
            <button className="text-sm text-white bg-blue-600 px-4 py-2 rounded-md">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bt2;
