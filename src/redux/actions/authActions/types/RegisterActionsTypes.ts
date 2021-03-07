import { Dispatch } from "redux";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { REGISTRATION, ERROR_MESSAGE, SUCCESS_MESSAGE, REGISTER_UNMOUNT } from "../registerActions";

type Registration = {
  type: typeof REGISTRATION;
};

type ErrorType = {
  type: typeof ERROR_MESSAGE;
  payload: string | null;
};

type SuccessType = {
  type: typeof SUCCESS_MESSAGE;
  payload: string | null;
};

export type RegisterUnmount = {
  type: typeof REGISTER_UNMOUNT;
};

export type Register = {
  login: string;
  email: string;
  password: string;
  name: string;
};

export type RegistrationAC = ActionFunction<Registration>;
export type RegisterUnmountAC = ActionFunction<RegisterUnmount>;
export type RegisterErrorAC = PayloadActionFunction<ErrorType, string | null>;
export type RegisterSuccessAC = PayloadActionFunction<SuccessType, string | null>;

export type RegisterReducerAction = Registration | ErrorType | SuccessType | RegisterUnmount;

export type RegisterThunk = (
  values: Register
) => (dispatch: Dispatch<RegisterReducerAction>) => void;
