import { authAPI } from "../../../api/authApi";
import { redirectAC } from "./authActions";
import { LogoutDeleteAC, LogoutDelete } from "./types/LogoutActionsTypes";

export const LOGOUT = "LOGOUT";

const logoutDeleteAC: LogoutDeleteAC = () => ({ type: LOGOUT });

export const logoutDelete: LogoutDelete = () => async (dispatch) => {
    await authAPI.deleteLogin()
    dispatch(logoutDeleteAC());
    dispatch(redirectAC());
};