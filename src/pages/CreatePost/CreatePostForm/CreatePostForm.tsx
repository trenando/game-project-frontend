import { Field, Form, Formik } from "formik";
import React from "react";
import { SlateEditor } from "../../../components/Slate/SlateEditor";
import styles from "./CreatePostForm.module.scss";
import { CreatePostFormFunction } from "./CreatePostFormTypes";
import { field } from "./field";

export const CreatePostForm: CreatePostFormFunction = ({
  onSubmit,
  successMessage,
  errorMessage,
}) => {
  const { name, title, errorClassName, className, type, placeholder, component, validError, validate } = field
  return (
    <Formik
      initialValues={{
        postTitle: "",
        postText: [
          {
            type: 'paragraph',
            children: [{ text: "value" }],
          },
        ],
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }: any) => (
        <Form className={styles.form}>
          <h2 className={styles.form__title}>Написать пост</h2>
          <div className={styles.form__block}>
            <label htmlFor={name} className={styles.form__label}>
              <span>{`${title}:`}</span>
            </label>
            <Field
              id={name}
              className={
                errors[name] && touched[name]
                  ? styles[errorClassName]
                  : styles[className]
              }
              type={type}
              placeholder={placeholder}
              component={component}
              name={name}
              validate={validate}
            />
            {errors[name] && touched[name] && (
              <div className={styles[validError]}>{errors[name]}</div>
            )}
          </div>
          <div className={styles.slate}>
            <span className={styles.slate__title}>
              Пост:
            </span>
            <div className={styles.slate__textbox}>
              <Field id="postText" name="postText" as={SlateEditor} />
            </div>
          </div>
          {errorMessage ? (
            <div className={styles.response__error}>
              <span>{errorMessage}</span>
            </div>
          ) : null}
          {successMessage ? (
            <div className={styles.response__success}>
              <span>{successMessage}</span>
            </div>
          ) : null}
          <div className={styles.form__button}>
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
