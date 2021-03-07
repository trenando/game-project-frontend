import { ProfileReducerAction } from "../../../actions/profileActions/types/ProfileActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type UserProfileData = {
  login: string;
  name: string;
  postCount: number;
  subCount: number;
};

export type ProfileReducer = (state: StateType, action: ProfileReducerAction) => StateType;
