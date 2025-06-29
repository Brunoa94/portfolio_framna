import { CommonRow } from "@/components/globals/common";
import styled from "styled-components";

export const AlertContainer = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;
  min-width: 100px;
  max-width: 300px;
  min-height: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: fixed;
  bottom: 60px;
  right: ${(props) => (props.$isActive ? "80px" : "-340px")};
  transition: all 1s ease-in-out;
  border-radius: 16px;
  border: 2px solid black;
  background-color: white;
  z-index: 5000;
`;

export const Row = styled(CommonRow)`
  gap: 8px;
`;
