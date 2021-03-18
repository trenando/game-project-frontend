import React, { useEffect } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginFunction, OnSubmit } from "./LoginTypes";
import style from "./Login.module.scss";

export const Login: LoginFunction = ({ authorization, unmountLogin, errorMessage }) => {
  const onSubmit: OnSubmit = (values) => {
    authorization(values);
  };

  useEffect(() => {
    return () => {
      unmountLogin();
    };
  }, [unmountLogin]);

  return (
    <section className={style.section}>
      <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </section>
  );
};
