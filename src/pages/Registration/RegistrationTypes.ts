import { Action } from "redux";
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import {
  RegistrationThunkCreator,
  UnmountRegistrationAction,
} from "../../redux/actions/authActions/types/RegistrationActionsTypes";

type RegistrationState = {
  registration: {
    errorMessage: string | null;
    successMessage: string | null;
  };
};

export type RegistrationValues = {
  login: string;
  email: string;
  password: string;
  name: string;
  surname?: string;
  gender?: string;
  age?: number;
};

export type RegistrationProps = {
  registration: (values: RegistrationValues) => void;
  unmountRegistration: () => void;
  errorMessage: string | null;
  successMessage: string | null;
};

export type OnSubmit = (values: RegistrationValues) => void;

export type RegistrationFunction = React.FC<RegistrationProps>;

export type RegistrationStateToProps = ({
  registration,
}: RegistrationState) => {
  errorMessage: string | null;
  successMessage: string | null;
};

export type RegistrationDispatch = (
  dispatch: ThunkDispatch<
    RegistrationValues,
    void,
    Action<RegistrationThunkCreator> | UnmountRegistrationAction
  >
) => {
  registration: (values: RegistrationValues) => void;
  unmountRegistration: () => void;
};
