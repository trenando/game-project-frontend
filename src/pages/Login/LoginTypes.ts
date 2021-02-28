import { ThunkDispatch } from "redux-thunk";
import React from "react";
import {
  AuthorizationPost,
  Authorization,
} from "../../redux/actions/authActions/types/AuthActionsTypes";
import { Action } from "redux";
import { LoginUnmount } from "../../redux/actions/authActions/types/AuthActionsTypes";

type LoginState = {
  auth: {
    errorMessage: string | null;
  };
};

export type LoginContainerType = ({ auth }: LoginState) => { errorMessage: string | null };

export type LoginProps = {
  authorization: (values: Authorization) => void;
  loginUnmount: () => void;
  errorMessage: string | null;
};

export type OnSubmit = (values: Authorization) => void;

export type LoginDispatchType = (
  dispatch: ThunkDispatch<Authorization, void, Action<AuthorizationPost> | LoginUnmount>
) => {
  authorization: (values: Authorization) => void;
  loginUnmount: () => void;
};

export type LoginType = React.FC<LoginProps>;
