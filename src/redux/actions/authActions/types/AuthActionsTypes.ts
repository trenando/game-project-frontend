import { Dispatch } from "redux";
import { AUTHORIZATION, REDIRECT } from "../authActions";

export type AuthorizationAC = () => {
    type: typeof AUTHORIZATION
};

export type Authorization = {
    email: string,
    password: string,
};

export type RedirectAC = () => {
    type: typeof REDIRECT
};

export type AuthorizationPost = (values: Authorization) => (dispatch: Dispatch) => void;