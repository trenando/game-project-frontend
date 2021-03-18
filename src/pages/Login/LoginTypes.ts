import { ThunkDispatch } from "redux-thunk";
import React from "react";
import { AuthorizationThunkCreator } from "../../redux/actions/authActions/types/AuthActionsTypes";
import { Action } from "redux";
import { UnmountLoginAction } from "../../redux/actions/authActions/types/AuthActionsTypes";

type LoginState = {
  auth: {
    errorMessage: string | null;
  };
};

export type AuthorizationValues = {
  email: string;
  password: string;
};

export type LoginStateToProps = ({ auth }: LoginState) => { errorMessage: string | null };

export type LoginProps = {
  authorization: (values: AuthorizationValues) => void;
  unmountLogin: () => void;
  errorMessage: string | null;
};

export type OnSubmit = (values: AuthorizationValues) => void;

export type LoginDispatch = (
  dispatch: ThunkDispatch<
    AuthorizationValues,
    void,
    Action<AuthorizationThunkCreator> | UnmountLoginAction
  >
) => {
  authorization: (values: AuthorizationValues) => void;
  unmountLogin: () => void;
};

export type LoginFunction = React.FC<LoginProps>;
