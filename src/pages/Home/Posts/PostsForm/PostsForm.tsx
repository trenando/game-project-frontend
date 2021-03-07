import { Form, Formik, Field } from "formik";
import React from "react";
import style from "./PostsForm.module.scss";

export const PostsForm = ({ onSearchSubmit }: any) => {
  return (
    <Formik
      initialValues={{
        searchValue: "",
      }}
      onSubmit={onSearchSubmit}
    >
      {({ isSubmitting }: any) => (
        <Form className={style.form}>
          <Field
            className={style.form__field}
            type="text"
            placeholder="Введите данные"
            component="input"
            name="search"
          />
          <button type="submit" disabled={isSubmitting} className={style.form__button}>
            Поиск
          </button>
        </Form>
      )}
    </Formik>
  );
};
