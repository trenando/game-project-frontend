import { PreloaderReducerActions } from "../../actions/globalActions/GlobalActionsTypes";
import { StateType } from "../../state/stateTypes";

export type PreloaderReducer = (state: StateType, action: PreloaderReducerActions) => StateType;
