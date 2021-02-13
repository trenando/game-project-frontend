import { authAPI } from "../../../api/authApi";
import { AuthorizationAC, AuthorizationPost, RedirectAC } from "./types/AuthActionsTypes";

export const AUTHORIZATION = "AUTHORIZATION";
export const REDIRECT = "REDIRECT";

const authorizationAC: AuthorizationAC = () => ({ type: AUTHORIZATION });
export const redirectAC: RedirectAC = () => ({ type: REDIRECT });

export const authorizationPost: AuthorizationPost = (values) => async (dispatch) => {
  await authAPI.postLogin(values);
  dispatch(authorizationAC());
  dispatch(redirectAC());
};
