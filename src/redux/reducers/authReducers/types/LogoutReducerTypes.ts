import { LOGOUT } from "../../../actions/authActions/logoutActions";
import { StateType } from "../../../initialState";

type LogoutReducerAction = {
    type: typeof LOGOUT
}

export type LogoutReducer = (state: StateType, action: LogoutReducerAction) => StateType;