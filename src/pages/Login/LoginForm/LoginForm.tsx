import React from "react";
import style from "./LoginForm.module.scss";
import { LoginFormElement, LoginFormFunction, LoginFormik } from "./LoginFormTypes";
import { Formik, Form, Field } from "formik";
import { fields } from "./fields";

export const LoginForm: LoginFormFunction = ({ onSubmit, errorMessage }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }: LoginFormik) => (
        <Form className={style.form}>
          <h2 className={style.form__title}>Авторизация</h2>
          {fields.map((el: LoginFormElement, index: number) => {
            return (
              <div key={index} className={style.form__block}>
                <label htmlFor={el.name} className={style.form__label}>
                  <span>{`${el.title}:`}</span>
                </label>
                <Field
                  id={el.name}
                  className={
                    errors[el.name] && touched[el.name] ? style.field__error : style.form__field
                  }
                  type={el.type}
                  placeholder={el.placeholder}
                  component="input"
                  name={el.name}
                  validate={el.validate}
                />
                {errors[el.name] && touched[el.name] && (
                  <div className={style.form__error}>{errors[el.name]}</div>
                )}
              </div>
            );
          })}
          {errorMessage ? (
            <div className={style.error}>
              <span>{errorMessage}</span>
            </div>
          ) : null}
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
