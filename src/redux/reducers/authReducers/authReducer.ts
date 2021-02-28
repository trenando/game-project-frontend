import {
  AUTHORIZATION,
  AUTH_ERROR,
  REDIRECT,
  LOGIN_UNMOUNT,
} from "../../actions/authActions/authActions";
import { initialState } from "../../initialState";
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
    case LOGIN_UNMOUNT: {
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
