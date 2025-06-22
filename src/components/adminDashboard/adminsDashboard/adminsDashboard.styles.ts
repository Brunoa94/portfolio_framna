"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media ${device.desktop} {
    max-width: 400px;
  }
`;
