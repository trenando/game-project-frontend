import React from "react";

export type AuthSelector = {
  isAuth: Boolean;
}

export type HeaderProps = {
  isAuth: Boolean;
  logout: () => void;
};

export type HeaderState = {
  auth: AuthSelector
};

export type LogoutDispatch = () => void;

export type OnClick = () => void;

export type HeaderFunction = React.FC<HeaderProps>;
