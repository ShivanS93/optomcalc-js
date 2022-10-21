import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  isError: boolean;
  errorMessage: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <div
      className={`flex flex-col gap-1 cus-card ${
        props.isError
          ? "bg-red-200 hover:bg-red-100 border-red-600"
          : " hover:border-sky-500"
      }`}
    >
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        className={
          props.isError
            ? "border border-red-600 p-2"
            : "border border-sky-500 p-2"
        }
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        placeholder={props.label}
        step={props.step}
      />
      {props.isError ? (
        <p className="text-sm text-red-600 place-self-end">
          {props.errorMessage}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CustomInput;
