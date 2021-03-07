import { PostsListReducerAction } from "../../../actions/postsActions/types/PostsListTypes";
import { StateType } from "../../../state/stateTypes";

export type PostsListReducer = (state: StateType, action: PostsListReducerAction) => StateType;
