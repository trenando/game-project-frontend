import React from "react";
import style from "./Registration.module.scss";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";
import { RegistrationType, OnRegisterSubmit } from "./RegistrationTypes";

export const Registration: RegistrationType = (props) => {
  const onRegisterSubmit: OnRegisterSubmit = (values) => {
    props.registration(values);
  };

  return (
    <section className={style.section}>
      <RegistrationForm onSubmit={onRegisterSubmit} />
    </section>
  );
};
