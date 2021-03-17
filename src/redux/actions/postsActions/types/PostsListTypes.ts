import { Dispatch } from "redux";
import { ListResponse } from "../../../../api/types/PostsApiTypes";
import { QueryParams } from "../../../../pages/Home/HomePosts/HomePostsTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { PAGE_INFO, POSTS_LIST } from "../postsList";

export type PostsListPayload = {
  type: typeof POSTS_LIST;
  payload: ListResponse;
};

export type PageInfoPayload = {
  type: typeof PAGE_INFO;
  payload: QueryParams;
};

type ActionPayload = PostsListPayload | PageInfoPayload;

export type PostsListAC = PayloadActionFunction<PostsListPayload, ListResponse>;
export type PageInfoAC = PayloadActionFunction<PageInfoPayload, QueryParams>;

export type PostsListGet = (query: QueryParams) => (dispatch: Dispatch<ActionPayload>) => void;

export type PostsListReducerAction = ActionPayload;
