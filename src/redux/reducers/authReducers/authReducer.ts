import { AUTHORIZATION, REDIRECT } from "../../actions/authActions/authActions";
import { initialState } from "../../initialState";
import { AuthReducer } from "./types/AuthReducerTypes";

export const authReducer: AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZATION: {
            return {
                ...state
            };
        }
        case REDIRECT: {
            return {
                ...state,
                isAuth: !state.isAuth
            }
        }
        default: {
            return state;
        }
    };
};