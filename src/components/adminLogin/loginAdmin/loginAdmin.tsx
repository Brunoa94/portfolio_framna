import React from "react";

import useOpen from "@/hooks/useOpen";
import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import { LoginButton } from "@/components/globals/buttons";
import LoginAdminForm from "@/components/forms/user/loginAdminForm/loginAdminForm";

const LoginAdmin = () => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <LoginButton onClick={open}>Login as Admin</LoginButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <LoginAdminForm handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default LoginAdmin;
