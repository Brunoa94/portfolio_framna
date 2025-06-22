"use client";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & svg {
    &:hover {
      scale: 1.2;
      transition: scale 0.3s ease-in-out;
    }
  }
`;

export const SectionTitle = styled.span`
  font-size: 30px;
  font-family: var(--font-nunito), sans-serif;

  color: #5d1d5e;
  font-weight: bold;

  @media ${device.mobile} {
    font-size: 40px;
  }
`;

export const Icon = styled.div``;
