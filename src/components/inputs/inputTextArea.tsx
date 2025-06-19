import React from "react";
import { Label, TextArea } from "./inputs.styles";

interface InputTextAreaI {
  id: string;
  required?: boolean;
  value?: string;
  name: string;
}

const InputTextArea = ({ id, required, value, name }: InputTextAreaI) => {
  return (
    <>
      <Label htmlFor={id}>{name}</Label>
      <TextArea id={id} name={id} required={required} defaultValue={value} />
    </>
  );
};

export default InputTextArea;
