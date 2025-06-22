"use client";

import { ColContainer } from "@/components/globals/common";
import styled from "styled-components";

export const SkillCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: #40116b;
  background: linear-gradient(
    0deg,
    rgba(64, 17, 107, 1) 27%,
    rgba(0, 0, 0, 0.86) 100%
  );
`;

export const Container = styled(ColContainer)`
  gap: 8px;
  flex-shrink: 0;
  width: 90px;
  align-items: center;
`;
