import { authAPI } from "../../../api/authApi";
import {
  RegisterThunk,
  RegistrationAC,
  RegisterErrorAC,
  RegisterSuccessAC,
  RegisterUnmountAC,
} from "./types/RegisterActionsTypes";

export const REGISTRATION = "REGISTRATION";
export const REGISTER_UNMOUNT = "REGISTER_UNMOUNT";
export const ERROR_MESSAGE = "REGISTER_MESSAGE";
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

const registrationAC: RegistrationAC = () => ({ type: REGISTRATION });
const registerErrorAC: RegisterErrorAC = (payload) => ({
  type: ERROR_MESSAGE,
  payload: payload,
});
const registerSuccessAC: RegisterSuccessAC = (payload) => ({
  type: SUCCESS_MESSAGE,
  payload: payload,
});

export const registerUnmountAC: RegisterUnmountAC = () => ({ type: REGISTER_UNMOUNT });

export const register: RegisterThunk = (values) => async (dispatch) => {
  try {
    const res = await authAPI.postRegister(values);
    dispatch(registrationAC());
    dispatch(registerSuccessAC(res.data));
    dispatch(registerErrorAC(null));
  } catch (err) {
    if (err.response.status < 500) {
      dispatch(registerSuccessAC(null));
      dispatch(registerErrorAC(err.response.data));
    } else {
      dispatch(registerSuccessAC(null));
      dispatch(registerErrorAC("Возникли проблемы с сервером"));
    }
  }
};
