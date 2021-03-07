import { LogoutReducerAction } from "../../../actions/authActions/types/LogoutActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type LogoutReducer = (state: StateType, action: LogoutReducerAction) => StateType;
