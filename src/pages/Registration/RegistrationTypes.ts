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

export interface RegistrationMemoProps {
  errorMessage: string | null;
  successMessage: string | null
}

export interface RegistrationProps extends RegistrationMemoProps {
  registration: (values: RegistrationValues) => void;
};

export type OnSubmit = (values: RegistrationValues) => void;

export type RegistrationFunction = FC<RegistrationProps>;

export type RegistrationDispatch = (values: RegistrationValues) => void;
export type UnmountRegistrationDispatch = () => void;
