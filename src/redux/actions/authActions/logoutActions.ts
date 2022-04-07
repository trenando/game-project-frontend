import { authAPI } from "../../../api/authApi";
import { redirectAC } from "./authActions";
import { LogoutAC, LogoutThunkCreator } from "./types/LogoutActionsTypes";

export const LOGOUT = "LOGOUT";

const logoutAC: LogoutAC = () => ({ type: LOGOUT });

export const logoutThunkCreator: LogoutThunkCreator = () => async (dispatch) => {
    await authAPI.deleteLogin();
    dispatch(logoutAC());
    dispatch(redirectAC());
};