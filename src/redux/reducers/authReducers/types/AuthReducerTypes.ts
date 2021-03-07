import { AuthReducerAction } from "../../../actions/authActions/types/AuthActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type AuthReducer = (state: StateType, action: AuthReducerAction) => StateType;
