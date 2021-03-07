import { POSTS_LIST } from "../../actions/postsActions/postsList";
import { initialState } from "../../state/initialState";
import { PostsListReducer } from "./types/PostsListReducerTypes";

export const postsListReducer: PostsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LIST: {
      const { postsCount, posts } = action.payload;
      return {
        ...state,
        allPostsCount: postsCount,
        posts,
      };
    }
    default: {
      return state;
    }
  }
};
