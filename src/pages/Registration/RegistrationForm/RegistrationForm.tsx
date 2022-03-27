import React from "react";
import {
  RegistrationFormElement,
  RegistrationFormFunction,
  GenderValues,
  RegistrationFormAnotherElement,
  RegistrationFormik,
} from "./RegistrationFormTypes";
import style from "./RegistrationForm.module.scss";
import { Formik, Form, Field } from "formik";
import { otherFields, fields } from "./fields";

export const RegistrationForm: RegistrationFormFunction = ({ onSubmit, errorMessage, successMessage }) => {
  return (
    <Formik
      initialValues={{
        login: "",
        email: "",
        password: "",
        name: "",
        surname: "",
        gender: "",
        age: ""
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }: RegistrationFormik) => (
        <Form className={style.form}>
          <h2 className={style.form__title}>Регистрация</h2>
          {fields.map((el: RegistrationFormElement) => {
            return (
              <div key={el.name} className={style.form__block}>
                <label htmlFor={el.name} className={style.form__label}>
                  <span>
                    {el.title}
                    {el.required ? <div className={style.form__required}>*</div> : null}:
                  </span>
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
          {otherFields.map((el: RegistrationFormAnotherElement) => {
            return (
              <React.Fragment key={el.name}>
                {el.values ? (
                  <div className={style.form__gender}>
                    {el.values.map((element: GenderValues, index: number) => {
                      return (
                        <label key={index} className={style.form__sublabel}>
                          <span>{element.radioName}</span>
                          <Field
                            value={element.value}
                            component="input"
                            type={el.type}
                            name={el.name}
                          />
                        </label>
                      );
                    })
                    }
                  </div>
                ) : (
                  <div className={style.form__block}>
                    <label htmlFor={el.name}>
                      <span>{`${el.title}:`}</span>
                    </label>
                    <Field
                      id={el.name}
                      className={style.form__field}
                      type={el.type}
                      component="input"
                      name={el.name}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
          {errorMessage ? (
            <div className={style.response__error}>
              <span>{errorMessage}</span>
            </div>
          ) : null}
          {successMessage ? (
            <div className={style.response__success}>
              <span>{successMessage}</span>
            </div>
          ) : null}
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
