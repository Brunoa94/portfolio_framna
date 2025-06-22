import { SubmitButton } from "@/components/globals/buttons";
import InputText from "@/components/inputs/inputText";
import React, { FormEvent, useCallback } from "react";
import { Form } from "../../forms.styles";
import { ErrorI } from "@/types/api";
import InputPassword from "@/components/inputs/inputPassword";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";
import { AdminStore, useAdminStore } from "@/store/adminStore";
import { CreateAdminI } from "@/types/admin";

interface Props {
  handleClose: () => void;
}

const CreateAdminForm = ({ handleClose }: Props) => {
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);
  const createUser = useAdminStore((state: AdminStore) => state.createAdmin);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);

      const body: CreateAdminI = {
        username: String(form.get("username")),
        password: String(form.get("password")),
      };

      try {
        await createUser(body);
        updateAlert({ message: "User created", status: 200 });
        handleClose();
      } catch (error) {
        const e = error as ErrorI;
        updateAlert({ message: e.message, status: e.status });
      }
    },
    [handleClose, updateAlert, createUser]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <InputText id="username" name="Username" required />
      <InputPassword id="password" name="Password" required />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default CreateAdminForm;
