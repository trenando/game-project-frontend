import { Dispatch } from "redux";
import { QueryParams } from "../../../../pages/Home/Posts/PostsTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { POSTS_LIST } from "../postsList";

export type PostsListPayload = {
  type: typeof POSTS_LIST;
  payload: any;
};

export type PostsListAC = PayloadActionFunction<PostsListPayload, any>;

export type PostsListGet = (query: QueryParams) => (dispatch: Dispatch<PostsListPayload>) => void;

export type PostsListReducerAction = PostsListPayload;
