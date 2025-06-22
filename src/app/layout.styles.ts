"use client";

import { ColContainer } from "@/components/globals/common";
import { device } from "@/theme/breakpoints";
import { styled } from "styled-components";

export const Container = styled(ColContainer)`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding-top: 60px;
`;

export const MainContainer = styled(ColContainer)`
  justify-content: center;
  padding: 16px;
  align-items: center;
  width: 100%;

  @media ${device.tablet} {
    padding-top: 32px;
  }
`;
