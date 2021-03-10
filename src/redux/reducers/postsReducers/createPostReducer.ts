import { CREATED_POST, ERROR_POST } from "../../actions/postsActions/createPost";
import { initialState } from "../../state/initialState";
import { CreatePostsReducer } from "./types/CreatePostReducerTypes";

export const createPostsReducer: CreatePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATED_POST: {
      return {
        ...state,
        successMessage: action.payload,
      };
    }
    case ERROR_POST: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
