import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type CreatePostProps = {
  createPost: (values: CreatePostValues) => void;
  postTitle: string;
  postText: string;
  successMessage: string | null;
  errorMessage: string | null;
};

type CreatePostState = {
  createPost: {
    successMessage: string | null;
    errorMessage: string | null;
  };
};

export type CreatePostValues = {
  postTitle: string;
  postText: string;
};

export type CreatePostStateToProps = ({
  createPost,
}: CreatePostState) => {
  successMessage: string | null;
  errorMessage: string | null;
};

export type OnSubmit = (values: CreatePostValues) => void;

export type CreatePostDispatch = (
  dispatch: ThunkDispatch<{}, void, Action<any>>
) => {
  createPost: (values: CreatePostValues) => void;
};

export type CreatePostFunction = React.FC<CreatePostProps>;
