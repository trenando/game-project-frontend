import { Validate } from "../../../validate/validate";
import { ValidateType } from "../../../validate/ValidateTypes";
import { LoginFormElement } from "./LoginFormTypes";

const validate: ValidateType = new Validate();

export const fields: LoginFormElement[] = [
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validate: (value) => validate.required().maxLength(64).validate(value),
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    validate: (value) => validate.required().minLength(8).maxLength(128).validate(value),
  },
];
