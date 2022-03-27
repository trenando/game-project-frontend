import { Validate } from "../../../validate/validate";
import { Fields } from "./CreatePostFormTypes";

export const field: Fields = [
  {
    title: "Заголовок",
    name: "postTitle",
    className: "form__input",
    errorClassName: "input__error",
    validError: "form__error--input",
    placeholder: "Заголовок",
    component: "input",
    type: "text",
    validate: (value) => new Validate().required().minLength(5).maxLength(30).validate(value),
  },
  {
    title: "Пост",
    name: "postText",
    className: "form__textarea",
    errorClassName: "textarea__error",
    validError: "form__error--textarea",
    placeholder: "Введите ваш пост",
    component: "textarea",
    type: "text",
    validate: (value) => new Validate().required().validate(value),
  },
];
