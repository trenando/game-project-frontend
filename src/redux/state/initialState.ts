import { StateType } from "./stateTypes";
import { userState } from "./userState";

export const initialState: StateType = {
  ...userState,
  isAuth: !!localStorage.getItem("token"),
  errorMessage: null,
  successMessage: null,
  allPostsCount: 0,
  posts: [],
  postTitle: "",
  postText: "",
  currentPage: 0,
  postsPerPage: 1,
};
