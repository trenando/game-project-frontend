import { Dispatch } from "redux";
import { CreatePostValues } from "../../../../pages/CreatePost/CreatePostTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { CREATED_POST, ERROR_POST } from "../createPostActions";

type CreatedPostAction = {
  type: typeof CREATED_POST;
  payload: string | null;
};

type ErrorPostAction = {
  type: typeof ERROR_POST;
  payload: string | null;
};

export type CreatedPostAC = PayloadActionFunction<CreatedPostAction, string | null>;
export type ErrorPostAC = PayloadActionFunction<ErrorPostAction, string | null>;

export type CreatePostReducerActions = CreatedPostAction | ErrorPostAction;

export type CreatePostThunkCreator = (
  values: CreatePostValues
) => (dispatch: Dispatch<CreatePostReducerActions>) => void;
