"use client";

import styled from "styled-components";

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const Col = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap : "6px")};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 16px 24px;
  border-radius : 8px
  font-family: "Roboto Mono", sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #301934;
  color: white;
  margin-left: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &: hover{
      scale: 1.1;
      transition: scale ease-in-out 0.2s;
  }
`;

export const Technologies = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Technology = styled.li`
  font-family: "Roboto mono", sans-serif;
  font-size: 14px;
`;
