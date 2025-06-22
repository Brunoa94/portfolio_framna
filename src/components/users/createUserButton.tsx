"use client";

import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";
import dynamic from "next/dynamic";

const CreateUserForm = dynamic(
  () => import("../forms/user/createUserForm/createUserForm"),
  { ssr: false }
);

const CreateUserButton = () => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton margin="0 0 0 auto" color="green" onClick={open}>
        Create User
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <CreateUserForm handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default CreateUserButton;
