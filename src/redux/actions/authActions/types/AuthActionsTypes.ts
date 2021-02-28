import { Dispatch } from "redux";
import { AUTHORIZATION, AUTH_ERROR, LOGIN_UNMOUNT, REDIRECT } from "../authActions";

interface IAction<T> {
  (): T;
};

type AuthType = {
  type: typeof AUTHORIZATION;
};

type ErrorType = {
  type: typeof AUTH_ERROR;
  payload: string | null;
};

export type LoginUnmount = {
  type: typeof LOGIN_UNMOUNT;
};

export type RedirectType = {
  type: typeof REDIRECT;
};

type AuthPostActions = AuthType | RedirectType | ErrorType;

export type AuthorizationAC = IAction<AuthType>;
export type RedirectAC = IAction<RedirectType>;
export type LoginUnmountAC = IAction<LoginUnmount>;
export type AuthErrorAC = (payload: string | null) => ErrorType;

export type Authorization = {
  email: string;
  password: string;
};

export type AuthorizationPost = (
  values: Authorization
) => (dispatch: Dispatch<AuthPostActions>) => void;

export type AuthReducerAction = AuthPostActions | LoginUnmount;
