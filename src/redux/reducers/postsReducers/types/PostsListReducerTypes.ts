import { PostsListReducerAction } from "../../../actions/postsActions/types/PostsListActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type PostsListReducer = (state: StateType, action: PostsListReducerAction) => StateType;
