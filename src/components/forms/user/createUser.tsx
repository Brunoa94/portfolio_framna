import InputText from "@/components/inputs/inputText";
import UsersService from "@/services/users";
import { CreateUserI } from "@/types/user";
import React, { FormEvent, useCallback } from "react";

const CreateUser = () => {
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const body: CreateUserI = {
      username: String(form.get("username")),
      password: String(form.get("password")),
    };

    try {
      const response = await UsersService.createUser(body);
      return response;
    } catch {}
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputText id="username" required />
      <InputText id="password" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUser;
