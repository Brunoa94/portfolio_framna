import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  border-radius: 12px;
  border: none;
  padding: 16px;
  border: 1px solid #2e003b;
  resize: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: none;
  padding: 0 16px;
  border: 1px solid #2e003b;
`;

export const Label = styled.label`
  font-family: var(--font-roboto), sans-serif
  font-size: 16px;
  font-weight: bold;
`;
