"use client";

import { device } from "@/theme/breakpoints";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 16px;

  @media ${device.tablet} {
    padding-top: 32px;
  }
`;
