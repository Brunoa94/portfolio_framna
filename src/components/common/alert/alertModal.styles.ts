import styled from "styled-components";

export const AlertContainer = styled.div<{ isactive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 32px;
  min-width: 100px;
  min-height: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: fixed;
  bottom: 60px;
  right: ${(props) => (props.isactive ? "80px" : "-240px")};
  transition: all 1s ease-in-out;
  background-color: black;
  border-radius: 16px;
`;
