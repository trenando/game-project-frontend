import { Dispatch } from "redux";
import { UserProfileData } from "../../../reducers/profileReducers/types/ProfileReducerType";
import { USER_PROFILE } from "../profileActions";

export type UserProfileAC = (data: UserProfileData) => {
    type: typeof USER_PROFILE,
    payload: UserProfileData
};

export type GetProfile = () => (dispatch: Dispatch) => void;