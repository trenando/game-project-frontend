import { Dispatch } from "redux";
import { ActionFunction } from "../../../GlobalReduxTypes";
import { LOGOUT } from "../logoutActions";
import { RedirectType } from "./AuthActionsTypes";

type LogoutAction = {
  type: typeof LOGOUT;
};

export type LogoutDeleteAC = ActionFunction<LogoutReducerAction>;

export type LogoutReducerAction = LogoutAction | RedirectType;

export type LogoutDelete = () => (dispatch: Dispatch<LogoutReducerAction>) => void;
