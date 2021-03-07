import { postsAPI } from "../../../api/postsApi";
import { PostsListAC, PostsListGet } from "./types/PostsListTypes";

export const POSTS_LIST = "POSTS_LIST";

const postsListAC: PostsListAC = (payload) => ({
  type: POSTS_LIST,
  payload,
});

export const postsListGet: PostsListGet = (query) => async (dispatch) => {
  try {
    const res = await postsAPI.getList(query);
    dispatch(postsListAC(res.data));
  } catch (err) {
    console.log("произошла ошибка", err);
  }
};
