import { REGISTRATION } from "../../../actions/authActions/registerActions";
import { StateType } from "../../../initialState";

type RegisterReducerAction = {
    type: typeof REGISTRATION
};

export type RegisterReducer = (state: StateType, action: RegisterReducerAction) => StateType;