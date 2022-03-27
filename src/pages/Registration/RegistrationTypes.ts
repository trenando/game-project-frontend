import { FC } from "react";

export type RegistrationSelector = {
  errorMessage: string | null;
  successMessage: string | null
}

export type RegistrationState = {
  registration: RegistrationSelector
};

export type RegistrationValues = {
  login: string;
  email: string;
  password: string;
  name: string;
  surname?: string;
  gender?: string;
  age?: string;
};

export type RegistrationProps = {
  registration: (values: RegistrationValues) => void;
  unmountRegistration: () => void;
  errorMessage: string | null;
  successMessage: string | null;
};

export type OnSubmit = (values: RegistrationValues) => void;

export type RegistrationFunction = FC<RegistrationProps>;

export type RegistrationDispatch = (values: RegistrationValues) => void;
export type UnmountRegistrationDispatch = () => void;
