import { authAPI } from "../../../api/authApi";
import { RegisterThunk, RegistrationAC } from "./types/RegisterActionsTypes";

export const REGISTRATION = "REGISTRATION";

const registrationAC: RegistrationAC = () => ({ type: REGISTRATION });

export const register: RegisterThunk = (values) => async (dispatch) => {
    await authAPI.postRegister(values)
    dispatch(registrationAC());
};