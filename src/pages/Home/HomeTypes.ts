import React from "react";
import { HomePostsState } from "./HomePosts/HomePostsTypes";

export type PostsListSelector = HomePostsState;

export type PreloaderSelector = {
  isLoading: boolean;
};

export type AuthSelector = {
  isAuth: boolean;
}

export type PreloaderState = {
  preloader: PreloaderSelector;
};

export type AuthState = {
  auth: AuthSelector
}

export type HomeState = {
  postsList: HomePostsState;
};

export type PostListDispatch = (query:QueryParams) => void;

export type HomeProps = {
  postsList: HomePostsState;
  isLoading: boolean;
  isAuth: boolean;
};

export type QueryParams = {
  page: string | null;
  limit: string | null;
};

export type ChangeUrl = (page: string) => void;

export type HomeFunction = React.FC<HomeProps>;
