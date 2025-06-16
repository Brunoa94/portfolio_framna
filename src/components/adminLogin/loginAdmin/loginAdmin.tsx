import React from "react";

import * as S from "../adminActions/adminActions.styles";
import useOpen from "@/hooks/useOpen";
import LoginAdminForm from "@/components/forms/user/loginAdminForm";
import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";

const LoginAdmin = () => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <S.LoginButton onClick={open}>Login as Admin</S.LoginButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <LoginAdminForm handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default LoginAdmin;
