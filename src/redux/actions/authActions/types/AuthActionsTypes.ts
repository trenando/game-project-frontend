import { Dispatch } from "redux";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { AUTHORIZATION, AUTH_ERROR, LOGIN_UNMOUNT, REDIRECT } from "../authActions";

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

export type AuthorizationAC = ActionFunction<AuthType>;
export type RedirectAC = ActionFunction<RedirectType>;
export type LoginUnmountAC = ActionFunction<LoginUnmount>;
export type AuthErrorAC = PayloadActionFunction<ErrorType, string | null>;

export type Authorization = {
  email: string;
  password: string;
};

export type AuthorizationPost = (
  values: Authorization
) => (dispatch: Dispatch<AuthPostActions>) => void;

export type AuthReducerAction = AuthPostActions | LoginUnmount;
