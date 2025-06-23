"use client";

import styled from "styled-components";

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border: 1px solid #590c97;
  border-radius: 50%;
  cursor: pointer;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`;
