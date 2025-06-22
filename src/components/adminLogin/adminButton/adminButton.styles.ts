"use client";

import styled from "styled-components";

export const LogoutButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
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
    margin-left: auto;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &: hover{
        scale: 1.1;
        transition: scale ease-in-out 0.2s;
    }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
