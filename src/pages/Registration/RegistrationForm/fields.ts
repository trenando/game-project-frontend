import { validate } from "../../../validate/validate";
import { RegisterFormElement, RegisterFormAnotherElement } from "./RegistrationFormTypes";

export const fields: RegisterFormElement[] = [
  {
    title: "Логин",
    name: "login",
    placeholder: "Login",
    type: "text",
    required: true,
    validate: validate({
      maxLength: 64,
      minLength: 3,
    }),
  },
  {
    title: "Почта",
    name: "email",
    placeholder: "Email",
    type: "email",
    required: true,
    validate: validate({
      maxLength: 64,
    }),
  },
  {
    title: "Пароль",
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
    validate: validate({
      maxLength: 128,
      minLength: 8,
    }),
  },
  {
    title: "Имя",
    name: "name",
    placeholder: "Name",
    type: "text",
    required: true,
    validate: validate({
      maxLength: 64,
      minLength: 2,
    }),
  },
  {
    title: "Фамилия",
    name: "surname",
    placeholder: "Surname",
    type: "text",
    required: false,
    validate: validate({
      maxLength: 64,
      required: false,
      minLength: 3,
    }),
  },
];

export const otherFields: RegisterFormAnotherElement[] = [
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
