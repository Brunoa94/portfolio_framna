import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 3;
`;

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  justify-content: center;
`;

export const GalleryButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
