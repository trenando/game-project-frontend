import { usersAPI } from "../../../api/usersApi";
import { GetProfile, UserProfileAC } from "./types/ProfileActionsTypes";

export const USER_PROFILE = "USER_PROFILE";

const userProfileAC: UserProfileAC = (data) => ({ type: USER_PROFILE, payload: data });

export const getProfile: GetProfile = () => async (dispatch) => {
    const data = await usersAPI.getUserProfile();
    dispatch(userProfileAC(data));
};