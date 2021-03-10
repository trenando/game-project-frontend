import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type HomePostsElement = {
  postId: number;
  postTitle: string;
  login: string;
  date: string;
};

export type QueryParams = {
  page: string | null;
  limit: string | null;
};

type HomePostsProps = {
  posts: HomePostsElement[];
  postsList: (query: QueryParams) => void;
  allPostsCount: number;
};

type PostsState = {
  postsList: {
    posts: HomePostsElement[];
    allPostsCount: number;
  };
};

export type UseQuery = () => URLSearchParams;

export type HomePostsType = React.FC<HomePostsProps>;

export type HomePostsContainerProps = ({
  postsList,
}: PostsState) => {
  posts: HomePostsElement[];
  allPostsCount: number;
};

export type HomePostsDispatchType = (
  dispatch: ThunkDispatch<QueryParams, void, Action<any>>
) => {
  postsList: (query: QueryParams) => void;
};
