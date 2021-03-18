import { postsAPI } from "../../../api/postsApi";
import { PageInfoAC, PostsListAC, PostsListGet } from "./types/PostsListActionsTypes";

export const POSTS_LIST = "POSTS_LIST";
export const PAGE_INFO = "PAGE_INFO";

const postsListAC: PostsListAC = (payload) => ({
  type: POSTS_LIST,
  payload,
});

const pageInfoAC:PageInfoAC = (payload) => ({
  type: PAGE_INFO,
  payload,
})

export const postsListGet: PostsListGet = (query) => async (dispatch) => {
  try {
    const res = await postsAPI.getList(query);
    dispatch(pageInfoAC(query));
    dispatch(postsListAC(res.data));
  } catch (err) {
    console.log("произошла ошибка", err);
  }
};
