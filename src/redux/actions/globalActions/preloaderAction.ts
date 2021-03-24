import { PreloaderAC } from "./GlobalActionsTypes";

export const PRELOADER = "PRELOADER";

export const preloaderAC: PreloaderAC = (payload) => ({
  type: PRELOADER,
  payload,
});
