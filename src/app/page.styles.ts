import styled from "styled-components";
import { device } from "@/theme/breakpoints";

export const Container = styled.div`
  background-color: red;
  width: 300px;
  height: 200px;

  @media ${device.tablet} {
    background-color: green;
  }
`;
