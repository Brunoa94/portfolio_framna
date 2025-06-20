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
  right: ${(props) => (props.$isActive ? "80px" : "-240px")};
  transition: all 1s ease-in-out;
  border-radius: 16px;
  border: 2px solid black;
  background-color: white;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
