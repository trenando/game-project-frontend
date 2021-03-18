import { PAGE_INFO, POSTS_LIST } from "../../actions/postsActions/postsListActions";
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
    case PAGE_INFO: {
      const { page, limit } = action.payload;
      const currentPage: number = page ? parseInt(page) : 1;
      const postsPerPage: number = limit ? parseInt(limit) : 10;
      return {
        ...state,
        currentPage,
        postsPerPage,
      };
    }
    default: {
      return state;
    }
  }
};
