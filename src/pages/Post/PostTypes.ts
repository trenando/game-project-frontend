import React from "react";
import { Action, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { PostId, PostIdResponse } from "../../api/types/PostsApiTypes";
import {
  PostIdAction,
  UnmountPostAction,
} from "../../redux/actions/postsActions/types/GetPostById";

type PostProps = {
  postById: PostIdResponse;
  getPost: (postId: PostId) => void;
  unmountPost: () => void;
};

type PostByIdState = {
  postById: {
    postId: PostIdResponse;
  };
};

export type PostContainerType = ({
  postById,
}: PostByIdState) => {
  postById: PostIdResponse;
};

export type PostType = React.FC<PostProps>;

export type PostDispatchType = (
  dispatch: ThunkDispatch<PostId, void, Action<PostIdAction> | UnmountPostAction>
) => {
  getPost: (postId: PostId) => void;
  unmountPost: () => void;
};
