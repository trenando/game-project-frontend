import { POST_ID, UNMOUNT_POST } from "../../actions/postsActions/getPostById";
import { initialState } from "../../state/initialState";
import { GetPostByIdReducer } from "./types/GetPostByIdReducerTypes";

export const getPostByIdReducer: GetPostByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ID: {
      return {
        ...state,
        postId: action.payload,
      };
    }
    case UNMOUNT_POST: {
      return {
        ...state,
        postId: {
          postTitle: "",
          postText: "",
          login: null,
          date: null,
        },
      };
    }
    default: {
      return state;
    }
  }
};
