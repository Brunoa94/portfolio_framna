"use client";

import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 0 32px;
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  gap: 32px;
  text-style: none;
  display: flex;
  align-items: center;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
