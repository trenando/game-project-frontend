import { REGISTRATION } from "../../actions/authActions/registerActions";
import { initialState } from "../../initialState";
import { RegisterReducer } from "./types/RegisterReducerTypes";

export const registerReducer: RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    };
};