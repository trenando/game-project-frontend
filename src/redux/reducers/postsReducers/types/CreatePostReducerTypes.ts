import { CreatePostReducerActions } from "../../../actions/postsActions/types/CreatePostTypes";
import { StateType } from "../../../state/stateTypes";

export type CreatePostsReducer = (state: StateType, action: CreatePostReducerActions) => StateType;
