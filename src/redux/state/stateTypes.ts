import { PostsElement } from "../../pages/Home/Posts/PostsTypes";

export interface UserState {
  login: string | null;
  name: string | null;
  surname: string | null;
  gender: string | null;
  age: number | null;
  postCount: number;
  subCount: number;
}

export interface StateType extends UserState {
  isAuth: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  allPostsCount: number;
  posts: PostsElement[];
  searchValue: string | null;
}
