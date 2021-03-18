import { Dispatch } from "redux";
import { AuthorizationValues } from "../../../../pages/Login/LoginTypes";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { AUTHORIZATION, AUTH_ERROR, UNMOUNT_LOGIN, REDIRECT } from "../authActions";

type AuthAction = {
  type: typeof AUTHORIZATION;
};

type ErrorAction = {
  type: typeof AUTH_ERROR;
  payload: string | null;
};

export type UnmountLoginAction = {
  type: typeof UNMOUNT_LOGIN;
};

export type RedirectAction = {
  type: typeof REDIRECT;
};

type AuthPostActions = AuthAction | RedirectAction | ErrorAction;

export type AuthorizationAC = ActionFunction<AuthAction>;
export type RedirectAC = ActionFunction<RedirectAction>;
export type UnmountLoginAC = ActionFunction<UnmountLoginAction>;
export type AuthErrorAC = PayloadActionFunction<ErrorAction, string | null>;

export type AuthorizationThunkCreator = (
  values: AuthorizationValues
) => (dispatch: Dispatch<AuthPostActions>) => void;

export type AuthReducerAction = AuthPostActions | UnmountLoginAction;
