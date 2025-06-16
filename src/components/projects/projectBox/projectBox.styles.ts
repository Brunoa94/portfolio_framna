"use client";

import styled from "styled-components";

export const ProjectItem = styled.li`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
