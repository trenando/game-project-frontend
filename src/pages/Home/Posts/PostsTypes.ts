import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type PostsElement = {
  postId: number;
  title: string;
  login: string;
  date: string;
};

export type QueryParams = {
  page: string | null;
  limit: string | null;
};

type PostsProps = {
  posts: PostsElement[];
  postsList: (query: QueryParams) => void;
};

type PostsState = {
  postsList: {
    posts: PostsElement[];
  };
};

export type UseQuery = () => URLSearchParams;

export type PostsType = React.FC<PostsProps>;

export type PostsContainerProps = ({
  postsList,
}: PostsState) => {
  posts: PostsElement[];
};

export type PostsDispatchType = (
  dispatch: ThunkDispatch<QueryParams, void, Action<any>>
) => {
  postsList: (query: QueryParams) => void;
};
