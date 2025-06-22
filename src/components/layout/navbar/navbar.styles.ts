"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    var(--font-nunito), sans-serif
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    @media ${device.desktop} {
      font-size: 1.5rem;
    }
  }

  @media ${device.desktop} {
    padding: 0 32px;
    flex: 2;
    justify-content: center;
    flex-direction: row;
  }
`;
