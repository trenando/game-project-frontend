import { PostIdReucerActions } from "../../../actions/postsActions/types/GetPostById";
import { StateType } from "../../../state/stateTypes";

export type GetPostByIdReducer = (state: StateType, action: PostIdReucerActions) => StateType;
