import { combineReducers, createStore, applyMiddleware } from "redux";
import { profileReducer } from "./reducers/profileReducers/profileReducer";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducers/authReducer";
import { registrationReducer } from "./reducers/authReducers/registrationReducer";
import { logoutReducer } from "./reducers/authReducers/logoutReducer";
import { postsListReducer } from "./reducers/postsReducers/postsListReducer";
import { createPostsReducer } from "./reducers/postsReducers/createPostReducer";
import { getPostByIdReducer } from "./reducers/postsReducers/getPostByIdReducer";

const reducers = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  registration: registrationReducer,
  logout: logoutReducer,
  postsList: postsListReducer,
  createPost: createPostsReducer,
  postById: getPostByIdReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
