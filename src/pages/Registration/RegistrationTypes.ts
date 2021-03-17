import { Action } from "redux";
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import {
  RegisterThunk,
  Register,
  RegisterUnmountAction,
} from "../../redux/actions/authActions/types/RegisterActionsTypes";

type RegisterState = {
  register: {
    errorMessage: string | null;
    successMessage: string | null;
  };
};

export type RegistrationProps = {
  registration: (values: Register) => void;
  registerUnmount: () => void;
  errorMessage: string | null;
  successMessage: string | null;
};

export type OnRegisterSubmit = (values: Register) => void;

export type RegistrationType = React.FC<RegistrationProps>;

export type RegisterContainerType = ({
  register,
}: RegisterState) => {
  errorMessage: string | null;
  successMessage: string | null;
};

export type RegistrationDispatchTypes = (
  dispatch: ThunkDispatch<Register, void, Action<RegisterThunk> | RegisterUnmountAction>
) => {
  registration: (values: Register) => void;
  registerUnmount: () => void;
};
