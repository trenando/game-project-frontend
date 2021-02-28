import {
  ERROR_MESSAGE,
  REGISTRATION,
  SUCCESS_MESSAGE,
  REGISTER_UNMOUNT
} from "../../actions/authActions/registerActions";
import { initialState } from "../../initialState";
import { RegisterReducer } from "./types/RegisterReducerTypes";

export const registerReducer: RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION: {
      return {
        ...state,
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: action.payload,
      };
    }
    case REGISTER_UNMOUNT: {
      return {
        ...state,
        errorMessage: null,
        successMessage: null,
      };
    }
    default: {
      return state;
    }
  }
};
