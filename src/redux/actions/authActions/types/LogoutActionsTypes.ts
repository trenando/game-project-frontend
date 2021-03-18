import { Dispatch } from "redux";
import { ActionFunction } from "../../../GlobalReduxTypes";
import { LOGOUT } from "../logoutActions";
import { RedirectAction } from "./AuthActionsTypes";

type LogoutAction = {
  type: typeof LOGOUT;
};

export type LogoutAC = ActionFunction<LogoutReducerAction>;

export type LogoutReducerAction = LogoutAction | RedirectAction;

export type LogoutThunkCreator = () => (dispatch: Dispatch<LogoutReducerAction>) => void;
