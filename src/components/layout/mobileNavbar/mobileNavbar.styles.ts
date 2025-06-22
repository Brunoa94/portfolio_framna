import { CommonCol } from "@/components/globals/common";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-left: auto;
`;

export const Button = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 16px;
`;

export const OptionsContainer = styled(CommonCol)`
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 16px);
  right: 0;
  z-index: 50;
  white-space: nowrap;
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;
  font-family: var(--font-nunito), sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
