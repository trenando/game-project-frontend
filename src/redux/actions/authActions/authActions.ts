import { authAPI } from "../../../api/authApi";
import {
  AuthorizationAC,
  AuthorizationThunkCreator,
  AuthErrorAC,
  RedirectAC,
  UnmountLoginAC,
} from "./types/AuthActionsTypes";

export const AUTHORIZATION = "AUTHORIZATION";
export const AUTH_ERROR = "AUTH_ERROR";
export const REDIRECT = "REDIRECT";
export const UNMOUNT_LOGIN = "UNMOUNT_LOGIN";

const authorizationAC: AuthorizationAC = () => ({ type: AUTHORIZATION });
const authErrorAC: AuthErrorAC = (payload) => ({
  type: AUTH_ERROR,
  payload,
});
export const redirectAC: RedirectAC = () => ({ type: REDIRECT });
export const unmountLoginAC: UnmountLoginAC = () => ({ type: UNMOUNT_LOGIN });

export const authorizationThunkCreator: AuthorizationThunkCreator = (values) => async (dispatch) => {
  try {
    await authAPI.postLogin(values);
    dispatch(authorizationAC());
    dispatch(authErrorAC(null));
    dispatch(redirectAC());
  } catch (err:any) {
    if (err.response.status < 500) {
      dispatch(authErrorAC(err.response.data));
    } else {
      dispatch(authErrorAC("Возникли проблемы с сервером"));
    }
  }
};
