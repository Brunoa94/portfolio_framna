import React from "react";
import { Input, Label } from "./inputs.styles";

interface InputPasswordI {
  id: string;
  required?: boolean;
  value?: string;
  name: string;
}

const InputPassword = ({ id, required, value, name }: InputPasswordI) => {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <Input
        type="password"
        id={id}
        name={id}
        required={required}
        defaultValue={value}
      />
    </>
  );
};

export default InputPassword;
