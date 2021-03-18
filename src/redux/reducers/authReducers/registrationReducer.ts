import {
  ERROR_MESSAGE,
  REGISTRATION,
  SUCCESS_MESSAGE,
  UNMOUNT_REGISTRATION
} from "../../actions/authActions/registrationActions";
import { initialState } from "../../state/initialState";
import { RegistrationReducer } from "./types/RegistrationReducerTypes";

export const registrationReducer: RegistrationReducer = (state = initialState, action) => {
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
    case UNMOUNT_REGISTRATION: {
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
