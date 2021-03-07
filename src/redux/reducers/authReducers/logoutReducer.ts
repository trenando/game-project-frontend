import { LOGOUT } from "../../actions/authActions/logoutActions";
import { initialState } from "../../state/initialState";
import { LogoutReducer } from "./types/LogoutReducerTypes";

export const logoutReducer:LogoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    };
};