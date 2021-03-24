import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { HomePostsState } from "./HomePosts/HomePostsTypes";
import { Actions } from "../../redux/actions/postsActions/types/PostsListActionsTypes";

interface HomeStateProps {
  homePostsProps: HomePostsState;
  isLoading: boolean;
  isAuth: boolean;
}

export type QueryParams = {
  page: string | null;
  limit: string | null;
};

type HomeState = {
  preloader: {
    isLoading: boolean;
  };
  auth: {
    isAuth: boolean;
  };
  postsList: HomePostsState;
};

export interface HomeProps extends HomeStateProps {
  postList: (query: QueryParams) => void;
}

export type HomeDispatch = (
  dispatch: ThunkDispatch<QueryParams, void, Action<Actions>>
) => {
  postList: (query: QueryParams) => void;
};

export type ChangeUrl = (page: string) => void;

export type HomeStateToProps = ({ postsList, preloader, auth }: HomeState) => HomeStateProps;

export type HomeFunction = React.FC<HomeProps>;
