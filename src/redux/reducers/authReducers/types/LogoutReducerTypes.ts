import { LogoutReducerAction } from "../../../actions/authActions/types/LogoutActionsTypes";
import { StateType } from "../../../initialState";

export type LogoutReducer = (state: StateType, action: LogoutReducerAction) => StateType;
