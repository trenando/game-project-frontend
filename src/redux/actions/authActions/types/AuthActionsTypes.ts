import { Dispatch } from "redux";
import { AUTHORIZATION, ERROR, REDIRECT } from "../authActions";

export type AuthorizationAC = () => {
  type: typeof AUTHORIZATION;
};

export type ErrorAC = (
  payload: string
) => {
  type: typeof ERROR;
  payload: string;
};

export type Authorization = {
  email: string;
  password: string;
};

export type RedirectAC = () => {
  type: typeof REDIRECT;
};

export type AuthorizationPost = (values: Authorization) => (dispatch: Dispatch) => void;
