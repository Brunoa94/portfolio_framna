"use client";

import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 0 24px;
  height: 40px;
  background-color: #2e003b;
  font-family: "Roboto Mono", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 12px;
`;

export const ActionButton = styled.button<{ color?: string; margin?: string }>`
  padding: 0 24px;
  height: 32px;
  background-color: ${(props) => props.color};
  font-family: "Roboto Mono", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: ${(props) => props.margin && props.margin};
`;
