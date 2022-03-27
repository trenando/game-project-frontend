import { postsAPI } from "../../../api/postsApi";
import { CreatedPostAC, CreatePostThunkCreator, ErrorPostAC } from "./types/CreatePostActionsTypes";

export const CREATED_POST = "CREATED_POST";
export const ERROR_POST = "ERROR_POST";

const createdPostAC: CreatedPostAC = (payload) => ({
  type: CREATED_POST,
  payload,
});

const errorPostAC:ErrorPostAC = (payload) => ({
  type: ERROR_POST,
  payload,
});

export const createPostThunkCreator: CreatePostThunkCreator = (values) => async (dispatch) => {
  try {
    const res = await postsAPI.postItem(values);
    dispatch(createdPostAC(res.data));
    dispatch(errorPostAC(null));
  } catch (err:any) {
    if (err.response.status < 500) {
      dispatch(createdPostAC(null));
      dispatch(errorPostAC(err.response.data));
    } else {
      dispatch(createdPostAC(null));
      dispatch(errorPostAC("Возникли проблемы с сервером"));
    }
  }
};
