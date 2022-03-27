import { HomePostsElement } from "../../pages/Home/HomePosts/HomePostsTypes";

export interface UserState {
  login: string | null;
  name: string | null;
  surname: string | null;
  gender: string | null;
  age: string | null;
  postCount: number;
  subCount: number;
}

export interface StateType extends UserState {
  isAuth: boolean;
  isLoading: boolean;
  errorMessage: string | null;
  successMessage: string | null;
  allPostsCount: number;
  posts: HomePostsElement[];
  postTitle: string | null;
  postText: string | null;
  currentPage: number;
  postsPerPage: number;
  postId: {
    postTitle: string;
    postText: string;
    login: string | null;
    date: string | null;
  };
}
