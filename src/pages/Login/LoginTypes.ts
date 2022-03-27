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

export type LoginProps = {
  authorization: (values: AuthorizationValues) => void;
  unmountLogin: () => void;
  errorMessage: string | null;
};

export type OnSubmit = (values: AuthorizationValues) => void;

export type UnmountLoginDispatch = () => void;

export type AuthorizationDispatch = (values: AuthorizationValues) => void;

export type LoginFunction = React.FC<LoginProps>;
