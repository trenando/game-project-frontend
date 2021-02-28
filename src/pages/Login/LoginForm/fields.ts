import { validate } from "../../../validate/validate";
import { LoginFormElement } from "./LoginFormTypes";

export const fields: LoginFormElement[] = [
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validate: validate({
      maxLength: 64,
    }),
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    validate: validate({
      maxLength: 128,
      minLength: 8,
    }),
  },
];
