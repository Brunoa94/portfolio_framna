import React from "react";

interface InputTextI {
  id: string;
  required?: boolean;
}

const InputText = ({ id, required }: InputTextI) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input type="text" id={id} name={id} required={required} />
    </>
  );
};

export default InputText;
