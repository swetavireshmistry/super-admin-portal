import React from "react";

interface InputLabelProp extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const InputLabel: React.FC<InputLabelProp> = ({ labelText, name, type, ...props }) => (
  <div>
    <label className="block text-lg font-medium text-gray-700" htmlFor={name}>
      {labelText}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 focus:outline-blue-400 rounded-md"
      {...props}
    />
  </div>
);

export default InputLabel;