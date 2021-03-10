import React from "react";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

type CreatePostProps = {
  createPost: (values: ValuesPayload) => void;
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

export type ValuesPayload = {
  postTitle: string;
  postText: string;
};

export type CreatePostContainerType = ({
  createPost,
}: CreatePostState) => {
  successMessage: string | null;
  errorMessage: string | null;
};

export type OnSubmit = (values: ValuesPayload) => void;

export type CreatePostDispatch = (
  dispatch: ThunkDispatch<{}, void, Action<any>>
) => {
  createPost: (values: ValuesPayload) => void;
};

export type CreatePostType = React.FC<CreatePostProps>;
