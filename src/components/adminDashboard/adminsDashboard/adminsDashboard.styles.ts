"use client";

import { SectionContainer } from "@/components/globals/common";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled(SectionContainer)`
  width: 100%;
  gap: 12px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media ${device.desktop} {
    max-width: 400px;
  }
`;
