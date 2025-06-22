"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";
import { MainContainer } from "../layout.styles";

export const Container = styled(MainContainer)`
  gap: 32px;
  width: 100%;
  justify-content: center;

  @media ${device.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;
