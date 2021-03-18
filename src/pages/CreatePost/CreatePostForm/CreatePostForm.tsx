import { Field, Form, Formik } from "formik";
import React from "react";
import style from "./CreatePostForm.module.scss";
import { CreatePostFormElement, CreatePostFormFunction } from "./CreatePostFormTypes";
import { field } from "./fields";

export const CreatePostForm: CreatePostFormFunction = ({
  onSubmit,
  successMessage,
  errorMessage,
}) => {
  return (
    <Formik
      initialValues={{
        postTitle:"",
        postText:"",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }: any) => (
        <Form className={style.form}>
          <h2 className={style.form__title}>Написать пост</h2>
          {field.map((el: CreatePostFormElement, index: number) => {
            return (
              <div key={index} className={style.form__block}>
                <label htmlFor={el.name} className={style.form__label}>
                  <span>{`${el.title}:`}</span>
                </label>
                <Field
                  className={
                    errors[el.name] && touched[el.name]
                      ? style[el.errorClassName]
                      : style[el.className]
                  }
                  type={el.type}
                  placeholder={el.placeholder}
                  component={el.component}
                  name={el.name}
                  validate={el.validate}
                />
                {errors[el.name] && touched[el.name] && (
                  <div className={style[el.validError]}>{errors[el.name]}</div>
                )}
              </div>
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
          <div className={style.form__button}>
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
