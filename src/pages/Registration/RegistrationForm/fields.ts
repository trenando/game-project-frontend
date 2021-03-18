import { Validate } from "../../../validate/validate";
import { ValidateType } from "../../../validate/ValidateTypes";
import { RegistrationFormElement, RegistrationFormAnotherElement } from "./RegistrationFormTypes";

const validate: ValidateType = new Validate();

export const fields: RegistrationFormElement[] = [
  {
    title: "Логин",
    name: "login",
    placeholder: "Login",
    type: "text",
    required: true,
    validate: (value) => validate.required().minLength(3).maxLength(64).validate(value),
  },
  {
    title: "Почта",
    name: "email",
    placeholder: "Email",
    type: "email",
    required: true,
    validate: (value) => validate.required().maxLength(64).validate(value),
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
    validate: (value) => validate.required().minLength(8).maxLength(128).validate(value),
  },
  {
    title: "Имя",
    name: "name",
    placeholder: "Name",
    type: "text",
    required: true,
    validate: (value) => validate.required().minLength(2).maxLength(64).validate(value),
  },
  {
    title: "Фамилия",
    name: "surname",
    placeholder: "Surname",
    type: "text",
    required: false,
    validate: (value) => validate.minLength(3).maxLength(64).validate(value),
  },
];

export const otherFields: RegistrationFormAnotherElement[] = [
  {
    name: "gender",
    type: "radio",
    values: [
      {
        radioName: "Мужчина",
        value: "male",
      },
      {
        radioName: "Женщина",
        value: "female",
      },
    ],
  },
  {
    title: "Возраст",
    name: "age",
    type: "text",
    placeholder: "Age",
  },
];
