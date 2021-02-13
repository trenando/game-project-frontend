import { ValidateLogin } from "./LoginFormTypes";

export const validateLogin: ValidateLogin = (maxLength, minLength = 1) => (value) => {
    if (!value) return "Обязательно";
    else if (value.length < minLength) return `Минимальная длина ${minLength} символов`;
    else if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
    else return undefined;
};