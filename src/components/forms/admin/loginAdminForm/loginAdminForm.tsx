import InputText from "@/components/inputs/inputText";
import { LoginAdminI as AdminI } from "@/types/admin";
import { signIn } from "next-auth/react";
import React, { FormEvent, useCallback } from "react";
import * as S from "../../forms.styles";
import { SubmitButton } from "@/components/globals/buttons";
import { Title } from "@/components/globals/fonts";
import InputPassword from "@/components/inputs/inputPassword";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";

interface LoginAdminI {
  handleClose: () => void;
}

const LoginAdminForm = ({ handleClose }: LoginAdminI) => {
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const form = new FormData(e.currentTarget);

      const body: AdminI = {
        username: String(form.get("username")),
        password: String(form.get("password")),
      };

      try {
        const response = await signIn("credentials", {
          username: body.username,
          password: body.password,
          redirect: false,
        });

        if (!response?.ok) {
          updateAlert({ message: "Authentication failed", status: 401 });
        } else {
          updateAlert({ message: "Admin logged in", status: 200 });
        }

        handleClose();
      } catch {
        updateAlert({ message: "Authentication failed", status: 401 });
      }
    },
    [handleClose, updateAlert]
  );

  return (
    <S.Form onSubmit={handleSubmit} data-testid="login-admin-form">
      <Title $hasmargin="0 0 12px 0">Login as Admin</Title>
      <InputText id="username" name="Username" required />
      <InputPassword id="password" name="Password" required />
      <SubmitButton type="submit">Submit</SubmitButton>
    </S.Form>
  );
};

export default LoginAdminForm;
