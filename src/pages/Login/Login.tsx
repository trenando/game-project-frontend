import React, { useEffect } from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import { LoginType, OnSubmit } from "./LoginTypes";
import style from "./Login.module.scss";

export const Login: LoginType = ({ authorization, loginUnmount, errorMessage }) => {
  const onSubmit: OnSubmit = (values) => {
    authorization(values);
  };

  useEffect(() => {
    return () => {
      loginUnmount();
    };
  }, [loginUnmount]);

  return (
    <section className={style.section}>
      <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
    </section>
  );
};
