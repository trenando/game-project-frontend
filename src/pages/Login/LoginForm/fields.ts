import { Validate } from "../../../validate/validate";
import { LoginFormElement } from "./LoginFormTypes";

export const fields: LoginFormElement[] = [
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validate: (value) => new Validate().required().maxLength(64).validate(value),
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    validate: (value) => new Validate().required().minLength(8).maxLength(128).validate(value),
  },
];
