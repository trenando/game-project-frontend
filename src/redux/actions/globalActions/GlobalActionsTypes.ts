import { PayloadActionFunction } from "../../GlobalReduxTypes";
import { PRELOADER } from "./preloaderAction";

export type PreloaderAction = {
  type: typeof PRELOADER;
  payload: boolean;
};

export type PreloaderReducerActions = PreloaderAction;

export type PreloaderAC = PayloadActionFunction<PreloaderAction, boolean>;
