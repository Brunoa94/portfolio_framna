"use client";

import { MainContainer } from "@/components/globals/common";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled(MainContainer)`
  gap: 32px;
  width: 100%;
  justify-content: center;

  @media ${device.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;
