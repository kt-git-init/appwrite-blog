import React, { forwardRef, useId } from "react";

const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div>
        {label && (
          <label className="mb-1 inline-block pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type="text"
          className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
