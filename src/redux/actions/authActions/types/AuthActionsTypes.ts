import { Dispatch } from "redux";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { AUTHORIZATION, AUTH_ERROR, LOGIN_UNMOUNT, REDIRECT } from "../authActions";

type AuthAction = {
  type: typeof AUTHORIZATION;
};

type ErrorAction = {
  type: typeof AUTH_ERROR;
  payload: string | null;
};

export type LoginUnmountAction = {
  type: typeof LOGIN_UNMOUNT;
};

export type RedirectAction = {
  type: typeof REDIRECT;
};

type AuthPostActions = AuthAction | RedirectAction | ErrorAction;

export type AuthorizationAC = ActionFunction<AuthAction>;
export type RedirectAC = ActionFunction<RedirectAction>;
export type LoginUnmountAC = ActionFunction<LoginUnmountAction>;
export type AuthErrorAC = PayloadActionFunction<ErrorAction, string | null>;

export type Authorization = {
  email: string;
  password: string;
};

export type AuthorizationPost = (
  values: Authorization
) => (dispatch: Dispatch<AuthPostActions>) => void;

export type AuthReducerAction = AuthPostActions | LoginUnmountAction;
