import React from "react";

type RouteElement = {
  path: string;
  link: string;
  name: string;
  element: JSX.Element;
};

type OtherRoutesElement = {
  path: string;
  element: JSX.Element;
};

type RouteElements = {
  home: RouteElement;
  profile: RouteElement;
  login: RouteElement;
  registration: RouteElement;
  createPost: RouteElement;
  post: OtherRoutesElement;
  pageNotFound: OtherRoutesElement;
};

export type RouteType = RouteElements;

export type StateRouter = {
  auth: {
    isAuth: boolean;
  };
};

type CustomRouteProps = {
  component: any;
};

export type CustomRouteFunction = React.FC<CustomRouteProps>;
