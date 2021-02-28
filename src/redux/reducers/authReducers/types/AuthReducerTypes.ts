import { AuthReducerAction } from "../../../actions/authActions/types/AuthActionsTypes";
import { StateType } from "../../../initialState";

export type AuthReducer = (state: StateType, action: AuthReducerAction) => StateType;
