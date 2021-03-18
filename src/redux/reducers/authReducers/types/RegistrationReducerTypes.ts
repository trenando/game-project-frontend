import { RegistrationReducerAction } from "../../../actions/authActions/types/RegistrationActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type RegistrationReducer = (state: StateType, action: RegistrationReducerAction) => StateType;
