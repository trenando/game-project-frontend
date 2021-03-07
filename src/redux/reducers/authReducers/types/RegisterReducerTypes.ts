import { RegisterReducerAction } from "../../../actions/authActions/types/RegisterActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type RegisterReducer = (state: StateType, action: RegisterReducerAction) => StateType;
