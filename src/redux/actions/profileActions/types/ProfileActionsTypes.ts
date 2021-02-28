import { Dispatch } from "redux";
import { UserProfileData } from "../../../reducers/profileReducers/types/ProfileReducerType";
import { USER_PROFILE } from "../profileActions";

export type ProfileReducerAction = {
  type: typeof USER_PROFILE;
  payload: UserProfileData;
};

export type UserProfileAC = (data: UserProfileData) => ProfileReducerAction;

export type GetProfile = () => (dispatch: Dispatch<ProfileReducerAction>) => void;
