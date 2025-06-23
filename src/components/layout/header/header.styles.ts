"use client";

import { CommonRow } from "@/components/globals/common";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  position: fixed;
  height: 80px;
  top: 0;
  border-radius: 0 0 16px 16px;
  background: #ffffff;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 12%,
    rgba(64, 17, 107, 1) 100%
  );
`;

export const LogoContainer = styled(CommonRow)`
  gap: 8px;
`;

export const HeaderTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: var(--font-nunito), sans-serif;
`;
