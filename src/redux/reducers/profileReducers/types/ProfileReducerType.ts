
import { USER_PROFILE } from "../../../actions/profileActions/profileActions";
import { StateType } from "../../../initialState";

type ProfileReducerAction = {
    type: typeof USER_PROFILE,
    payload: UserProfileData
};

export type UserProfileData = {
    login: string,
    name: string,
    postCount: number,
    subCount: number
};

export type ProfileReducer = (state:StateType, action: ProfileReducerAction) => StateType;