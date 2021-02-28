import { authAPI } from "../../../api/authApi";
import {
  AuthorizationAC,
  AuthorizationPost,
  AuthErrorAC,
  RedirectAC,
  LoginUnmountAC,
} from "./types/AuthActionsTypes";

export const AUTHORIZATION = "AUTHORIZATION";
export const AUTH_ERROR = "AUTH_ERROR";
export const REDIRECT = "REDIRECT";
export const LOGIN_UNMOUNT = "LOGIN_UNMOUNT";

const authorizationAC: AuthorizationAC = () => ({ type: AUTHORIZATION });
const authErrorAC: AuthErrorAC = (payload) => ({
  type: AUTH_ERROR,
  payload: payload,
});
export const redirectAC: RedirectAC = () => ({ type: REDIRECT });
export const loginUnmountAC: LoginUnmountAC = () => ({ type: LOGIN_UNMOUNT });

export const authorizationPost: AuthorizationPost = (values) => async (dispatch) => {
  try {
    await authAPI.postLogin(values);
    dispatch(authorizationAC());
    dispatch(authErrorAC(null));
    dispatch(redirectAC());
  } catch (err) {
    if (err.response.status < 500) {
      dispatch(authErrorAC(err.response.data));
    } else {
      dispatch(authErrorAC("Возникли проблемы с сервером"));
    }
  }
};
