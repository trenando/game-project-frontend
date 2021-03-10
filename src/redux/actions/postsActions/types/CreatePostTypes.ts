import { Dispatch } from "redux";
import { ValuesPayload } from "../../../../pages/CreatePost/CreatePostTypes";
import { PayloadActionFunction } from "../../../GlobalReduxTypes";
import { CREATED_POST, ERROR_POST } from "../createPost";

type CreatedPostPayload = {
  type: typeof CREATED_POST;
  payload: string | null;
};

type ErrorPostPayload = {
  type: typeof ERROR_POST;
  payload: string | null;
};

export type CreatedPostAC = PayloadActionFunction<CreatedPostPayload, string | null>;
export type ErrorPostAC = PayloadActionFunction<ErrorPostPayload, string | null>;

export type CreatePostReducerActions = CreatedPostPayload | ErrorPostPayload;

export type CreatePost = (
  values: ValuesPayload
) => (dispatch: Dispatch<CreatePostReducerActions>) => void;
