import { Dispatch } from "redux";
import { REGISTRATION, ERROR_MESSAGE, SUCCESS_MESSAGE, REGISTER_UNMOUNT } from "../registerActions";

interface IAction<T> {
  (): T;
}

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

export type RegistrationAC = IAction<Registration>;
export type RegisterUnmountAC = IAction<RegisterUnmount>;
export type RegisterErrorAC = (payload: string | null) => ErrorType;
export type RegisterSuccessAC = (payload: string | null) => SuccessType;

export type RegisterReducerAction = Registration | ErrorType | SuccessType | RegisterUnmount;

export type RegisterThunk = (
  values: Register
) => (dispatch: Dispatch<RegisterReducerAction>) => void;
