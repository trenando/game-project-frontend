import React from "react";
import { RegisterFormElement, RegisterFormTypes } from "./RegistrationFormTypes";
import style from "./RegistrationForm.module.scss";
import { Formik, Form, Field } from "formik";

const fields: RegisterFormElement[] = [
  {
    title: "Login",
    name: "login",
    placeholder: "Login",
    type: "text",
  },
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    title: "Name",
    name: "name",
    placeholder: "Name",
    type: "text",
  },
];

export const RegistrationForm: RegisterFormTypes = (props) => {
  return (
    <Formik
      initialValues={{
        login: "",
        email: "",
        password: "",
        name: "",
      }}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <div className={style.form__text}>Регистрация</div>
          {fields.map((el: RegisterFormElement, index: number) => {
            return (
              <div key={index} className={style.form__block}>
                <label htmlFor={el.name} className={style.form__label}>
                  <span>{`${el.title}:`}</span>
                </label>
                <Field
                  id={el.name}
                  className={style.form__field}
                  type={el.type}
                  placeholder={el.placeholder}
                  component="input"
                  name={el.name}
                />
              </div>
            );
          })}
          <div className={style.form__btn}>
            <button type="submit" disabled={isSubmitting}>
              Подтвердить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
