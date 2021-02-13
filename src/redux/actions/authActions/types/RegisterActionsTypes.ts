import { Dispatch } from "redux";
import { REGISTRATION } from "../registerActions";

export type Register = {
    login: string,
    email: string,
    password: string,
    name: string
};

export type RegistrationAC = () => {
    type: typeof REGISTRATION
}

export type RegisterThunk = (values: Register) => (dispatch: Dispatch) => void;