import {
  AUTHORIZATION,
  AUTH_ERROR,
  REDIRECT,
  UNMOUNT_LOGIN,
} from "../../actions/authActions/authActions";
import { initialState } from "../../state/initialState";
import { AuthReducer } from "./types/AuthReducerTypes";

export const authReducer: AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION: {
      return {
        ...state,
      };
    }
    case REDIRECT: {
      return {
        ...state,
        isAuth: !state.isAuth,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case UNMOUNT_LOGIN: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    default: {
      return state;
    }
  }
};
