import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizationThunkCreator, unmountLoginAC } from "../../redux/actions/authActions/authActions";
import { Login } from "./Login";
import { AuthorizationDispatch, AuthSelector, LoginProps, LoginState, UnmountLoginDispatch } from "./LoginTypes";

export const LoginContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const authSelector: AuthSelector = useSelector(({ auth }: LoginState) => auth);
  const authorization: AuthorizationDispatch = (values) => dispatch(authorizationThunkCreator(values));
  const unmountLogin: UnmountLoginDispatch = () => dispatch(unmountLoginAC());
  const loginProps: LoginProps = {
    ...authSelector, authorization, unmountLogin
  }
  return <Login {...loginProps} />
}
