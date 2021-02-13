import { Dispatch } from "redux";
import { LOGOUT } from "../logoutActions";

export type LogoutDeleteAC = () => {
    type: typeof LOGOUT
};

export type LogoutDelete = () => (dispatch: Dispatch) => void;