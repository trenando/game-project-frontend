import { usersAPI } from "../../../api/usersApi";
import { GetProfile, UserProfileAC } from "./types/ProfileActionsTypes";

export const USER_PROFILE = "USER_PROFILE";

const userProfileAC: UserProfileAC = (payload) => ({
  type: USER_PROFILE,
  payload,
});

export const getProfile: GetProfile = () => async (dispatch) => {
  const data = await usersAPI.getUserProfile();
  dispatch(userProfileAC(data));
};
