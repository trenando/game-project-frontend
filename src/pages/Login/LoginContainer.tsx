import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizationThunkCreator, unmountLoginAC } from "../../redux/actions/authActions/authActions";
import { Login } from "./Login";
import { AuthorizationDispatch, AuthSelector, LoginProps, LoginState, MemoLoginProps, UnmountLoginDispatch } from "./LoginTypes";

export const LoginContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const authSelector: AuthSelector = useSelector(({ auth }: LoginState) => auth);

  const authorization: AuthorizationDispatch = useCallback((values) => {
    dispatch(authorizationThunkCreator(values))
  }, [dispatch]);

  const unmountLogin: UnmountLoginDispatch = useCallback(() => {
    dispatch(unmountLoginAC())
  }, [dispatch]);

  const memoLoginProps: MemoLoginProps = useMemo(() => {
    return {
      ...authSelector
    }
  }, [authSelector])

  const loginProps: LoginProps = {
    ...memoLoginProps, authorization, unmountLogin
  }

  return <Login {...loginProps} />
}
