import React, { PropsWithChildren } from "react";
import * as S from "./fullscreenLayer.styles";

interface FullscreenLayerI extends PropsWithChildren {
  handleClose: (e: React.MouseEvent) => void;
}

const FullscreenLayer = ({ children, handleClose }: FullscreenLayerI) => {
  return (
    <S.FullscreenLayer onClick={(e) => handleClose(e)}>
      {children}
    </S.FullscreenLayer>
  );
};

export default FullscreenLayer;
