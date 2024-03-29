import { postsAPI } from "../../../api/postsApi";
import { GetPostByIdThunkCreator, PostIdAC, UnmountPostAC } from "./types/GetPostByIdActionsTypes";

export const POST_ID = "POST_ID";
export const UNMOUNT_POST = "UNMOUNT_POST";

export const unmountPostAC: UnmountPostAC = () => ({
  type: UNMOUNT_POST,
});

const postIdAC: PostIdAC = (payload) => ({
  type: POST_ID,
  payload,
});

export const getPostByIdThunkCreator: GetPostByIdThunkCreator = (postId) => async (dispatch) => {
  try {
    const res = await postsAPI.getPostById(postId);
    dispatch(postIdAC(res.data));
  } catch (err:any) {
    console.log("ошибка-заглушка", err.response.data);
  }
};
