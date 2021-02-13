import React from "react";
import style from "./LoginForm.module.scss";
import { LoginFormEl, LoginFormTypes } from "./LoginFormTypes";
import { Formik, Form, Field } from "formik";
import { validateLogin } from "./validateLogin";

const fields = [
  {
    title: "Email",
    name: "email",
    placeholder: "Email",
    type: "email",
    validate: validateLogin(64),
  },
  {
    title: "Password",
    name: "password",
    placeholder: "Password",
    type: "password",
    validate: validateLogin(128, 8),
  },
];

export const LoginForm: LoginFormTypes = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={props.onSubmit}
    >
      {({ errors, touched, isSubmitting }: any) => (
        <Form className={style.form}>
          <div className={style.form__text}>Авторизация</div>
          {fields.map((el: LoginFormEl, index: number) => {
            return (
              <div key={index} className={style.form__block}>
                <label htmlFor={el.name} className={style.form__label}>
                  <span>{`${el.title}:`}</span>
                </label>
                <Field
                  id={el.name}
                  className={ errors[el.name] && touched[el.name] ? (style.field__error) : (style.form__field)}
                  type={el.type}
                  placeholder={el.placeholder}
                  component="input"
                  name={el.name}
                  validate={el.validate}
                />
                {errors[el.name] && touched[el.name] && <div className={style.form__error}>{errors[el.name]}</div>}
              </div>
            );
          })}
          <div className={style.form__btn}>
            <button type="submit" disabled={isSubmitting}>
              Логин
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
