import { RegisterReducerAction } from "../../../actions/authActions/types/RegisterActionsTypes";
import { StateType } from "../../../initialState";

export type RegisterReducer = (state: StateType, action: RegisterReducerAction) => StateType;
