import React, { useEffect } from "react";
import style from "./Registration.module.scss";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";
import { RegistrationType, OnRegisterSubmit } from "./RegistrationTypes";

export const Registration: RegistrationType = ({
  registration,
  registerUnmount,
  errorMessage,
  successMessage,
}) => {
  const onRegisterSubmit: OnRegisterSubmit = (values) => {
    registration(values);
  };

  useEffect(() => {
    return () => {
      registerUnmount();
    };
  }, [registerUnmount]);

  return (
    <section className={style.section}>
      <RegistrationForm
        onSubmit={onRegisterSubmit}
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </section>
  );
};
