import { authAPI } from "../../../api/authApi";
import { AuthorizationAC, AuthorizationPost, ErrorAC, RedirectAC } from "./types/AuthActionsTypes";

export const AUTHORIZATION = "AUTHORIZATION";
export const ERROR = "ERROR";
export const REDIRECT = "REDIRECT";

const authorizationAC: AuthorizationAC = () => ({ type: AUTHORIZATION });
const errorAC:ErrorAC = (payload) => ({
  type: ERROR,
  payload: payload,
});
export const redirectAC: RedirectAC = () => ({ type: REDIRECT });

export const authorizationPost: AuthorizationPost = (values) => async (dispatch) => {
  try {
    await authAPI.postLogin(values);
    dispatch(authorizationAC());
    dispatch(redirectAC());
  } catch (err) {
    dispatch(errorAC(err.response.data));
  }
};
