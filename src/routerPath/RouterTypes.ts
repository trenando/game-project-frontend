import { ConnectedComponent } from "react-redux";
import React from "react";
import { ProfileProps } from "../pages/Profile/ProfileTypes";
import { LoginProps } from "../pages/Login/LoginTypes";
import { RegistrationProps } from "../pages/Registration/RegistrationTypes";

type ComponentType<T> = ConnectedComponent<React.FC<T>, T>;

type RouteElement<T> = {
  path: string;
  name: string;
  component: ComponentType<T> | React.FC<T>;
};

type RouteElements = {
  home: RouteElement<{}>;
  profile: RouteElement<ProfileProps>;
  login: RouteElement<LoginProps>;
  registration: RouteElement<RegistrationProps>;
};

export type RouteType = RouteElements;

export type StateRouter = {
  auth: {
    isAuth: Boolean;
  };
};
