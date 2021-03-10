import { Dispatch } from "redux";
import { ListResponse } from "../../../../api/types/PostsApiTypes";
import { QueryParams } from "../../../../pages/Home/HomePosts/HomePostsTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { POSTS_LIST } from "../postsList";

export type PostsListPayload = {
  type: typeof POSTS_LIST;
  payload: ListResponse;
};

export type PostsListAC = PayloadActionFunction<PostsListPayload, ListResponse>;

export type PostsListGet = (query: QueryParams) => (dispatch: Dispatch<PostsListPayload>) => void;

export type PostsListReducerAction = PostsListPayload;
