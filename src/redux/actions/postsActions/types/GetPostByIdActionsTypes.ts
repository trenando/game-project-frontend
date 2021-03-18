import { Dispatch } from "redux";
import { PostId, PostIdResponse } from "../../../../api/types/PostsApiTypes";
import { ActionFunction, PayloadActionFunction } from "../../../GlobalReduxTypes";
import { POST_ID, UNMOUNT_POST } from "../getPostByIdActions";

export type PostIdAction = {
  type: typeof POST_ID;
  payload: PostIdResponse;
};

export type UnmountPostAction = {
  type: typeof UNMOUNT_POST;
};

export type PostIdReucerActions = PostIdAction | UnmountPostAction;

export type PostIdAC = PayloadActionFunction<PostIdAction, PostIdResponse>;
export type UnmountPostAC = ActionFunction<UnmountPostAction>;

export type GetPostById = (postId: PostId) => (dispatch: Dispatch<PostIdAction>) => void;
