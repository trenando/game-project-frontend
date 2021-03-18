import { authAPI } from "../../../api/authApi";
import {
  RegistrationThunkCreator,
  RegistrationAC,
  RegistrationErrorAC,
  RegistrationSuccessAC,
  UnmountRegistrationAC,
} from "./types/RegistrationActionsTypes";

export const REGISTRATION = "REGISTRATION";
export const UNMOUNT_REGISTRATION = "UNMOUNT_REGISTRATION";
export const ERROR_MESSAGE = "REGISTER_MESSAGE";
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";

const registrationAC: RegistrationAC = () => ({ type: REGISTRATION });
const registrationErrorAC: RegistrationErrorAC = (payload) => ({
  type: ERROR_MESSAGE,
  payload,
});
const registrationSuccessAC: RegistrationSuccessAC = (payload) => ({
  type: SUCCESS_MESSAGE,
  payload,
});

export const unmountRegisterAC: UnmountRegistrationAC = () => ({ type: UNMOUNT_REGISTRATION });

export const registrationThunkCreator: RegistrationThunkCreator = (values) => async (dispatch) => {
  try {
    const res = await authAPI.postRegister(values);
    dispatch(registrationAC());
    dispatch(registrationSuccessAC(res.data));
    dispatch(registrationErrorAC(null));
  } catch (err) {
    if (err.response.status < 500) {
      dispatch(registrationSuccessAC(null));
      dispatch(registrationErrorAC(err.response.data));
    } else {
      dispatch(registrationSuccessAC(null));
      dispatch(registrationErrorAC("Возникли проблемы с сервером"));
    }
  }
};
