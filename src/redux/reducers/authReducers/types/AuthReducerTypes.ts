import { AUTHORIZATION, ERROR, REDIRECT } from "../../../actions/authActions/authActions";
import { StateType } from "../../../initialState";

type AuthType = {
  type: typeof AUTHORIZATION;
};

type RedirectType = {
  type: typeof REDIRECT;
};

type ErrorType = {
  type: typeof ERROR;
  payload: string;
};

type AuthReducerAction = AuthType | RedirectType | ErrorType;

export type AuthReducer = (state: StateType, action: AuthReducerAction) => StateType;
