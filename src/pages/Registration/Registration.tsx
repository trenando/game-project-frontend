import React from "react";
import style from "./Registration.module.scss";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";
import { RegistrationFunction, OnSubmit } from "./RegistrationTypes";

export const Registration:RegistrationFunction = ({
  registration,
  errorMessage,
  successMessage,
}) => {
  const onSubmit: OnSubmit = (values) => {
    registration(values);
  };

  return (
    <section className={style.section}>
      <RegistrationForm
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </section>
  );
};
