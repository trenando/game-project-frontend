import React from "react";
import { PostId, PostIdResponse } from "../../api/types/PostsApiTypes";

export type PostSelector = {
  postIdResponse: PostIdResponse;
}

export type PostByIdState = {
  postById: PostSelector
};

export type GetPostDispatch = (postId: PostId) => void;

export type UnmountPostDispatch = () => void;

export type PostFunction = React.FC<PostProps>;

export type PostProps = {
  postIdResponse: PostIdResponse;
  postId: PostId;
  getPost: (postId: PostId) => void;
  unmountPost: () => void;
};