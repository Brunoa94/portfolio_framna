import { SubmitButton } from "@/components/globals/buttons";
import InputText from "@/components/inputs/inputText";
import UsersService from "@/services/users";
import { CreateUserI } from "@/types/user";
import React, { FormEvent, useCallback } from "react";
import { Form } from "../forms.styles";
import { ErrorI } from "@/types/api";
import InputPassword from "@/components/inputs/inputPassword";

interface Props {
  handleClose: () => void;
}

const CreateUserForm = ({ handleClose }: Props) => {
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);

      const body: CreateUserI = {
        username: String(form.get("username")),
        password: String(form.get("password")),
      };

      try {
        const response = await UsersService.createUser(body);

        handleClose();

        return response;
      } catch (e) {
        throw e as ErrorI;
      }
    },
    [handleClose]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <InputText id="username" name="Username" required />
      <InputPassword id="password" name="Password" required />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default CreateUserForm;
