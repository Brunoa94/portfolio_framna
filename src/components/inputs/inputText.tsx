import React from "react";
import { Input, Label } from "./inputs.styles";

interface InputTextI {
  id: string;
  required?: boolean;
  value?: string;
  name: string;
}

const InputText = ({ id, required, value, name }: InputTextI) => {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <Input
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
