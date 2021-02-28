import { Dispatch } from "redux";
import { LOGOUT } from "../logoutActions";
import { RedirectType } from "./AuthActionsTypes";

interface IAction<T> {
  (): T;
}

type LogoutAction = {
  type: typeof LOGOUT;
};

export type LogoutDeleteAC = IAction<LogoutReducerAction>;

export type LogoutReducerAction = LogoutAction | RedirectType;

export type LogoutDelete = () => (dispatch: Dispatch<LogoutReducerAction>) => void;
