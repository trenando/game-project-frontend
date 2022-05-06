import React from "react";

export type LoginState = {
  auth: AuthSelector;
};

export type AuthSelector = {
  errorMessage: string | null;
}

export type AuthorizationValues = {
  email: string;
  password: string;
};

export interface MemoLoginProps {
  errorMessage: string | null;
}

export interface LoginProps extends MemoLoginProps {
  authorization: (values: AuthorizationValues) => void;
  unmountLogin: () => void;
};

export type OnSubmit = (values: AuthorizationValues) => void;

export type UnmountLoginDispatch = () => void;

export type AuthorizationDispatch = (values: AuthorizationValues) => void;

export type LoginFunction = React.FC<LoginProps>;
