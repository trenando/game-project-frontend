import { combineReducers, createStore, applyMiddleware } from "redux";
import { profileReducer } from "./reducers/profileReducers/profileReducer";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducers/authReducer";
import { registerReducer } from "./reducers/authReducers/registerReducer";
import { logoutReducer } from "./reducers/authReducers/logoutReducer";


const reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    register: registerReducer,
    logout: logoutReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));