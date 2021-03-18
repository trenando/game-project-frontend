import { Dispatch } from "redux";
import { RegistrationValues } from "../../../../pages/Registration/RegistrationTypes";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import {
  REGISTRATION,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  UNMOUNT_REGISTRATION,
} from "../registrationActions";

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

export type UnmountRegistrationAction = {
  type: typeof UNMOUNT_REGISTRATION;
};

export type RegistrationAC = ActionFunction<RegistrationAction>;
export type UnmountRegistrationAC = ActionFunction<UnmountRegistrationAction>;
export type RegistrationErrorAC = PayloadActionFunction<ErrorAction, string | null>;
export type RegistrationSuccessAC = PayloadActionFunction<SuccessAction, string | null>;

export type RegistrationReducerAction =
  | RegistrationAction
  | ErrorAction
  | SuccessAction
  | UnmountRegistrationAction;

type RegistrationThunkDispatch = RegistrationAction | ErrorAction | SuccessAction;

export type RegistrationThunkCreator = (
  values: RegistrationValues
) => (dispatch: Dispatch<RegistrationThunkDispatch>) => void;
