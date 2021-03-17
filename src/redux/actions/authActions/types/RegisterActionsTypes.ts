import { Dispatch } from "redux";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { REGISTRATION, ERROR_MESSAGE, SUCCESS_MESSAGE, REGISTER_UNMOUNT } from "../registerActions";

type RegistrationAction = {
  type: typeof REGISTRATION;
};

type ErrorAction = {
  type: typeof ERROR_MESSAGE;
  payload: string | null;
};

type SuccessAction = {
  type: typeof SUCCESS_MESSAGE;
  payload: string | null;
};

export type RegisterUnmountAction = {
  type: typeof REGISTER_UNMOUNT;
};

export type Register = {
  login: string;
  email: string;
  password: string;
  name: string;
};

export type RegistrationAC = ActionFunction<RegistrationAction>;
export type RegisterUnmountAC = ActionFunction<RegisterUnmountAction>;
export type RegisterErrorAC = PayloadActionFunction<ErrorAction, string | null>;
export type RegisterSuccessAC = PayloadActionFunction<SuccessAction, string | null>;

export type RegisterReducerAction =
  | RegistrationAction
  | ErrorAction
  | SuccessAction
  | RegisterUnmountAction;

export type RegisterThunk = (
  values: Register
) => (dispatch: Dispatch<RegisterReducerAction>) => void;
