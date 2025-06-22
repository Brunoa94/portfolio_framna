"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px;
  margin-top: auto;

  @media ${device.tablet} {
    padding: 16px 32px;
  }
`;
