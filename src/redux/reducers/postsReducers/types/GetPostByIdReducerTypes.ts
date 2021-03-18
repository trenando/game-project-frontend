import { PostIdReucerActions } from "../../../actions/postsActions/types/GetPostByIdActionsTypes";
import { StateType } from "../../../state/stateTypes";

export type GetPostByIdReducer = (state: StateType, action: PostIdReucerActions) => StateType;
