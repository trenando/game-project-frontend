import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginType, OnSubmit } from "./LoginTypes";
import style from "./Login.module.scss";

export const Login: LoginType = (props) => {
  const onSubmit: OnSubmit = (values) => {
    props.authorization(values);
  };

  return (
    <section className={style.section}>
      <LoginForm onSubmit={onSubmit} />
    </section>
  );
};
