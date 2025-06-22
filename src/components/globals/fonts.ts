"use client";

import styled from "styled-components";

export const Title = styled.h1<{ $hasmargin?: string }>`
  font-family: var(--font-roboto), sans-serif
  font-weight: bold;
  margin: ${(props) => props.$hasmargin};
`;

export const Section = styled.span`
  font-family: var(--font-roboto), sans-serif
  font-size: 16px;
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-roboto), sans-serif
  font-weight: bold;
`;

export const ItemTitle = styled.h3<{ color?: string }>`
  font-family: var(--font-roboto), sans-serif
  font-weight: bold;
  color: ${(props) => props.color && props.color};
`;

export const Paragraph = styled.p<{ color?: string; $textAlign?: string }>`
  font-size: 16px;
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.$textAlign && props.$textAlign};
  font-family: var(--font-nunito), sans-serif;
`;

export const SmallText = styled.span`
  font-size: 14px;
  text-align: center;
`;

export const MediumText = styled.span<{ $hasColor?: string }>`
  font-size: 18px;
  color: ${(props) => (props.$hasColor ? props.$hasColor : "white")};
  white-space: nowrap;
  text-align: center;
`;
