import { PRELOADER } from "../../actions/globalActions/preloaderAction";
import { initialState } from "../../state/initialState";
import { PreloaderReducer } from "./GlobalReducersTypes";

export const preloaderReducer: PreloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRELOADER: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
