import { Dispatch } from "redux";
import { ListResponse } from "../../../../api/types/PostsApiTypes";
import { QueryParams } from "../../../../pages/Home/HomePosts/HomePostsTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { PAGE_INFO, POSTS_LIST } from "../postsList";

export type PostsListAction = {
  type: typeof POSTS_LIST;
  payload: ListResponse;
};

export type PageInfoAction = {
  type: typeof PAGE_INFO;
  payload: QueryParams;
};

export type Actions = PostsListAction | PageInfoAction;

export type PostsListAC = PayloadActionFunction<PostsListAction, ListResponse>;
export type PageInfoAC = PayloadActionFunction<PageInfoAction, QueryParams>;

export type PostsListGet = (query: QueryParams) => (dispatch: Dispatch<Actions>) => void;

export type PostsListReducerAction = Actions;
