import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface HomeStateProps {
  posts: HomePostsElement[];
  allPostsCount: number;
  currentPage: number;
  postsPerPage: number;
}

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

interface HomePostsProps extends HomeStateProps {
  postsList: (query: QueryParams) => void;
}

type PostsState = {
  postsList: HomeStateProps;
};

export type UseQuery = () => URLSearchParams;

export type HomePostsType = React.FC<HomePostsProps>;

export type HomePostsContainerProps = ({ postsList }: PostsState) => HomeStateProps;

export type HomePostsDispatchType = (
  dispatch: ThunkDispatch<QueryParams, void, Action<any>>
) => {
  postsList: (query: QueryParams) => void;
};

export type ChangeUrl = (page: string) => void;
