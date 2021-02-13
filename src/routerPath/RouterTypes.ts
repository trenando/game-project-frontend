import { ConnectedComponent } from "react-redux";
import React from "react";
import { ProfileProps } from "../pages/Profile/ProfileTypes";
import { LoginProps } from "../pages/Login/LoginTypes";
import { RegistrationProps } from "../pages/Registration/RegistrationTypes";

type ComponentType<T> = ConnectedComponent<React.FC<T>, Pick<any, string | number | symbol>>;

type RouteElement<T> = {
  path: string;
  name: string;
  component: ComponentType<T>;
};

type UIElement = {
  path: string;
  name: string;
  component: React.FC<any>;
};

type RouteElements = {
  home: UIElement;
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
