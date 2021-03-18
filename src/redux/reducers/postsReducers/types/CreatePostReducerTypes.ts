import { CreatePostReducerActions } from "../../../actions/postsActions/types/CreatePostActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type CreatePostsReducer = (state: StateType, action: CreatePostReducerActions) => StateType;
