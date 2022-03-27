import React from "react";

export type HomePostsState = {
  posts: HomePostsElement[];
  allPostsCount: number;
  currentPage: number;
  postsPerPage: number;
};

type HomePostsProps = {
  postsList: HomePostsState;
  isLoading: boolean;
  changeUrl: (page: string) => void;
};

export type NewUrl = (page: string) => void;

export type HomePostsElement = {
  postId: string;
  postTitle: string;
  login: string;
  date: string;
};

export type HomePostsFunction = React.FC<HomePostsProps>;
