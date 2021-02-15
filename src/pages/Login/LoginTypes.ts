import { ThunkDispatch } from "redux-thunk";
import React from "react";
import {
  AuthorizationPost,
  Authorization,
} from "../../redux/actions/authActions/types/AuthActionsTypes";
import { Action } from "redux";

type LoginState = {
  auth: {
    errorMessage: string;
  };
};

export type LoginContainerType = ({ auth }: LoginState) => { errorMessage: string };

export type LoginProps = {
  authorization: (values: Authorization) => void;
  errorMessage: string;
};

export type OnSubmit = (values: Authorization) => void;

export type LoginDispatchType = (
  dispatch: ThunkDispatch<Authorization, void, Action<AuthorizationPost>>
) => {
  authorization: (values: Authorization) => void;
};

export type LoginType = React.FC<LoginProps>;
