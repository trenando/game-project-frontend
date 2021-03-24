import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { route } from "./routerPath/routerPath";
import { useSelector } from "react-redux";
import { StateRouter } from "./routerPath/RouterTypes";
import { CustomRoute } from "./routerPath/CustomRoute";

export const Router: React.FC<{}> = () => {
  const isAuth: boolean = useSelector((state: StateRouter) => state.auth.isAuth);
  return (
    <Switch>
      <Route exact strict path={route.home.path} component={route.home.component} />
      <Route exact path={route.post.path} component={route.post.component} />
      <Route exact strict path={route.login.path}>
        {isAuth ? (
          <Redirect to={route.profile.path} />
        ) : (
          <CustomRoute component={route.login.component} />
        )}
      </Route>
      <Route exact strict path={route.registration.path}>
        {isAuth ? (
          <Redirect to={route.profile.path} />
        ) : (
          <CustomRoute component={route.registration.component} />
        )}
      </Route>
      <Route exact strict path={route.profile.path}>
        {isAuth ? (
          <CustomRoute component={route.profile.component} />
        ) : (
          <Redirect to={route.login.path} />
        )}
      </Route>
      <Route exact strict path={route.createPost.path}>
        {isAuth ? (
          <CustomRoute component={route.createPost.component} />
        ) : (
          <Redirect to={route.login.path} />
        )}
      </Route>
      <Route path={route.pageNotFound.path} component={route.pageNotFound.component} />
    </Switch>
  );
};
