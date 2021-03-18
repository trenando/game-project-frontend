import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Actions } from "../../../redux/actions/postsActions/types/PostsListActionsTypes";

interface HomeStateProps {
  posts: HomePostsElement[];
  allPostsCount: number;
  currentPage: number;
  postsPerPage: number;
}

export type HomePostsElement = {
  postId: string;
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

export type HomePostsFunction = React.FC<HomePostsProps>;

export type HomePostsStateToProps = ({ postsList }: PostsState) => HomeStateProps;

export type HomePostsDispatch = (
  dispatch: ThunkDispatch<QueryParams, void, Action<Actions>>
) => {
  postsList: (query: QueryParams) => void;
};

export type ChangeUrl = (page: string) => void;
