import { combineReducers, createStore, applyMiddleware } from "redux";
import { profileReducer } from "./reducers/profileReducers/profileReducer";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducers/authReducer";
import { registerReducer } from "./reducers/authReducers/registerReducer";
import { logoutReducer } from "./reducers/authReducers/logoutReducer";
import { postsListReducer } from "./reducers/postsReducers/postsListReducer";
import { createPostsReducer } from "./reducers/postsReducers/createPostReducer";
import { getPostByIdReducer } from "./reducers/postsReducers/getPostByIdReucer";

const reducers = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  register: registerReducer,
  logout: logoutReducer,
  postsList: postsListReducer,
  createPost: createPostsReducer,
  postById: getPostByIdReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
