"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 0 24px;
  height: 40px;
  background-color: #2e003b;
  font-family: var(--font-roboto), sans-serif
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 12px;
`;

export const ActionButton = styled.button<{
  color?: string;
  $hasmargin?: string;
}>`
  padding: 0 24px;
  height: 32px;
  background-color: ${(props) => props.color};
  font-family: var(--font-roboto), sans-serif
  font-size: 14px;
  text-transform: uppercase;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin: ${(props) => props.$hasmargin && props.$hasmargin};
`;

export const LoginButton = styled.button`
    padding: 16px 24px;
    border-radius : 8px
    font-family: var(--font-roboto), sans-serif
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    background-color:rgb(103, 36, 114);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 16px;
    
    &: hover{
        scale: 1.1;
        transition: scale ease-in-out 0.2s;
    }

    @media ${device.desktop}{
      margin-left: auto;
      margin-top: 0;
    }
`;
