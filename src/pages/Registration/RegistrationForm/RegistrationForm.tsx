import React from "react";
import {
  RegistrationFormElement,
  RegistrationFormFunction,
  GenderValues,
  RegistrationFormAnotherElement,
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
        age: undefined,
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }: any) => (
        <Form className={style.form}>
          <h2 className={style.form__title}>Регистрация</h2>
          {fields.map((el: RegistrationFormElement, index: number) => {
            return (
              <div key={index} className={style.form__block}>
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
          <div className={style.form__subblock}>
            {otherFields.map((el: RegistrationFormAnotherElement, index: number) => {
              return (
                <React.Fragment key={index}>
                  {el.values ? (
                    el.values.map((element: GenderValues, id: number) => {
                      return (
                        <label key={id} className={style.form__sublabel}>
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
                  ) : (
                    <div className={style.form__age}>
                      <label htmlFor={el.name}>
                        <span>{`${el.title}:`}</span>
                      </label>
                      <Field
                        id={el.name}
                        className={style.form__subfield}
                        type={el.type}
                        placeholder={el.placeholder}
                        component="input"
                        name={el.name}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
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
