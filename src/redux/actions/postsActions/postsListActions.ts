import { postsAPI } from "../../../api/postsApi";
import { preloaderAC } from "../globalActions/preloaderAction";
import { PageInfoAC, PostsListAC, PostsListThunkCreator } from "./types/PostsListActionsTypes";

export const POSTS_LIST = "POSTS_LIST";
export const PAGE_INFO = "PAGE_INFO";

const postsListAC: PostsListAC = (payload) => ({
  type: POSTS_LIST,
  payload,
});

const pageInfoAC: PageInfoAC = (payload) => ({
  type: PAGE_INFO,
  payload,
})

export const postsListThunkCreator: PostsListThunkCreator = (query) => async (dispatch) => {
  try {
    dispatch(preloaderAC(true));
    const res = await postsAPI.getList(query);
    dispatch(pageInfoAC(query));
    dispatch(postsListAC(res.data));
    dispatch(preloaderAC(false));
  } catch (err: any) {
    console.log("произошла ошибка", err);
  }
};
