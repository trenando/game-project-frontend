import { Dispatch } from "redux";
import { ListResponse } from "../../../../api/types/PostsApiTypes";
import { QueryParams } from "../../../../pages/Home/HomeTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { PreloaderAction } from "../../globalActions/GlobalActionsTypes";
import { PAGE_INFO, POSTS_LIST } from "../postsListActions";

export type PostsListAction = {
  type: typeof POSTS_LIST;
  payload: ListResponse;
};

export type PageInfoAction = {
  type: typeof PAGE_INFO;
  payload: QueryParams;
};

export type Actions = PostsListAction | PageInfoAction | PreloaderAction;

export type PostsListAC = PayloadActionFunction<PostsListAction, ListResponse>;
export type PageInfoAC = PayloadActionFunction<PageInfoAction, QueryParams>;

export type PostsListThunkCreator = (query: QueryParams) => (dispatch: Dispatch<Actions>) => void;

export type PostsListReducerAction = Actions;
