import React, { forwardRef } from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  return (
    <div
      className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
    >
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </div>
  );
};

export default forwardRef(Select);
