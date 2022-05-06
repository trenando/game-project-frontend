import { Validate } from "../../../validate/validate";
import { CreatePostFormElement } from "./CreatePostFormTypes";

export const field: CreatePostFormElement = {
  title: "Заголовок",
  name: "postTitle",
  className: "form__input",
  errorClassName: "input__error",
  validError: "form__error--input",
  placeholder: "Заголовок",
  component: "input",
  type: "text",
  validate: (value) => new Validate().required().minLength(5).maxLength(30).validate(value),
}