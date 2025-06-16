import InputText from "@/components/inputs/inputText";
import { LoginUserI } from "@/types/user";
import { signIn } from "next-auth/react";
import React, { FormEvent, useCallback } from "react";
import * as S from "../forms.styles";
import { SubmitButton } from "@/components/globals/buttons";
import { Title } from "@/components/globals/fonts";
import InputPassword from "@/components/inputs/inputPassword";

interface LoginAdminI {
  handleClose: () => void;
}

const LoginAdminForm = ({ handleClose }: LoginAdminI) => {
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const form = new FormData(e.currentTarget);

      const body: LoginUserI = {
        username: String(form.get("username")),
        password: String(form.get("password")),
      };

      try {
        await signIn("credentials", {
          username: body.username,
          password: body.password,
          redirect: false,
        });
      } catch {
        console.log("ERROR");
      }

      handleClose();
    },
    [handleClose]
  );

  return (
    <S.Form onSubmit={handleSubmit}>
      <Title hasmargin="0 0 12px 0">Login as Admin</Title>
      <InputText id="username" name="Username" required />
      <InputPassword id="password" name="Password" required />
      <SubmitButton type="submit">Submit</SubmitButton>
    </S.Form>
  );
};

export default LoginAdminForm;
