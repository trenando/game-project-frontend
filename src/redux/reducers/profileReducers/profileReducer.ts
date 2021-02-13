import { USER_PROFILE } from "../../actions/profileActions/profileActions";
import { initialState } from "../../initialState";
import { ProfileReducer } from "./types/ProfileReducerType";

export const profileReducer: ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFILE: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    };
};
