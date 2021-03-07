import { Dispatch } from "redux";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { UserProfileData } from "../../../reducers/profileReducers/types/ProfileReducerType";
import { USER_PROFILE } from "../profileActions";

export type ProfileReducerAction = {
  type: typeof USER_PROFILE;
  payload: UserProfileData;
};

export type UserProfileAC = PayloadActionFunction<ProfileReducerAction, UserProfileData>;

export type GetProfile = () => (dispatch: Dispatch<ProfileReducerAction>) => void;
