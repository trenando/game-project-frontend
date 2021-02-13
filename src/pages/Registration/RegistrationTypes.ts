import { Action } from "redux";
import React from 'react';
import { ThunkDispatch } from "redux-thunk";
import { RegisterThunk, Register } from "../../redux/actions/authActions/types/RegisterActionsTypes";

export type RegistrationProps = {
    registration: (values: Register) => void
};

export type OnRegisterSubmit = (values: Register) => void;

export type RegistrationType = React.FC<RegistrationProps>;

export type RegistrationDispatchTypes = (dispatch: ThunkDispatch<Register, void, Action<RegisterThunk>>) => {
    registration: (values: Register) => void
}