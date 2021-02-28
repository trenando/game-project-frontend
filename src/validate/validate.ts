import { Validate } from "./ValidateTypes";

export const validate: Validate = ({ maxLength, required = true, minLength }) => (value) => {
  if (!value && required) return "Обязательно";
  if (minLength && value.length !== 0) {
    if (value.length < minLength) return `Минимальная длина ${minLength} символов`;
  }
  if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
  return undefined;
};