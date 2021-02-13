import { AUTHORIZATION, REDIRECT } from "../../../actions/authActions/authActions";
import { StateType } from "../../../initialState";

type AuthType = {
    type: typeof AUTHORIZATION
};

type RedirectType = {
    type: typeof REDIRECT
};

type AuthReducerAction = AuthType | RedirectType;

export type AuthReducer = (state: StateType, action: AuthReducerAction) => StateType;