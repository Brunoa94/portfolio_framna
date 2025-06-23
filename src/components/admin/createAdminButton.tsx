"use client";

import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";
import dynamic from "next/dynamic";

const CreateAdminForm = dynamic(
  () => import("../forms/admin/createAdminForm/createAdminForm"),
  { ssr: false }
);

const CreateAdminButton = () => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton $hasmargin="0 0 0 auto" color="green" onClick={open}>
        Create Admin
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <CreateAdminForm handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default CreateAdminButton;
