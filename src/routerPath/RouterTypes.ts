import { ConnectedComponent } from "react-redux";
import React from "react";
import { ProfileProps } from "../pages/Profile/ProfileTypes";
import { LoginProps } from "../pages/Login/LoginTypes";
import { RegistrationProps } from "../pages/Registration/RegistrationTypes";
import { CreatePostProps } from "../pages/CreatePost/CreatePostTypes";

type ComponentType<T> = ConnectedComponent<React.FC<T>, T>;

type RouteElement<T> = {
  path: string;
  link: string;
  name: string;
  component: ComponentType<T> | React.FC<T>;
};

type OtherRoutesElement<T> = {
  path: string;
  component: ComponentType<T> | React.FC<T>;
};

type RouteElements = {
  home: RouteElement<{}>;
  profile: RouteElement<ProfileProps>;
  login: RouteElement<LoginProps>;
  registration: RouteElement<RegistrationProps>;
  createPost: RouteElement<CreatePostProps>;
  post: OtherRoutesElement<any>;
};

export type RouteType = RouteElements;

export type StateRouter = {
  auth: {
    isAuth: Boolean;
  };
};
