import React from "react";

export type CreatePostMessagesSelector = {
  successMessage: string | null;
  errorMessage: string | null;
}

export interface MemoCreatePostProps {
  successMessage: string | null;
  errorMessage: string | null;
}

export interface CreatePostProps extends MemoCreatePostProps{
  createPost: (values: CreatePostValues) => void;
};

export type CreatePostState = {
  createPost: {
    successMessage: string | null;
    errorMessage: string | null;
  };
};

export type CreatePostDispatch = (values: CreatePostValues) => void;

export type CreatePostValues = {
  postTitle: string;
  postText: string;
};

export type OnSubmit = (values: CreatePostValues) => void;

export type CreatePostFunction = React.FC<CreatePostProps>;
