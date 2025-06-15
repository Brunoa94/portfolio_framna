import React from "react";

interface InputTextI {
  id: string;
  required?: boolean;
  value?: string;
}

const InputText = ({ id, required, value }: InputTextI) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        type="text"
        id={id}
        name={id}
        required={required}
        defaultValue={value}
      />
    </>
  );
};

export default InputText;
