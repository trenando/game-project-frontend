import { Validate } from "../../../validate/validate";
import { RegistrationFormElement, RegistrationFormAnotherElement } from "./RegistrationFormTypes";

export const fields: RegistrationFormElement[] = [
  {
    title: "Логин",
    name: "login",
    placeholder: "Login",
    type: "text",
    required: true,
    validate: (value) => new Validate().required().minLength(3).maxLength(64).validate(value),
  },
  {
    title: "Почта",
    name: "email",
    placeholder: "Email",
    type: "email",
    required: true,
    validate: (value) => new Validate().required().maxLength(64).validate(value),
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
    validate: (value) => new Validate().required().minLength(8).maxLength(128).validate(value),
  },
  {
    title: "Имя",
    name: "name",
    placeholder: "Name",
    type: "text",
    required: true,
    validate: (value) => new Validate().required().minLength(2).maxLength(64).validate(value),
  },
  {
    title: "Фамилия",
    name: "surname",
    placeholder: "Surname",
    type: "text",
    required: false,
    validate: (value) => new Validate().minLength(3).maxLength(64).validate(value),
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
    type: "date",
    value: ""
  },
];
