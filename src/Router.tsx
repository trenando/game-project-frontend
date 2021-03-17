import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { route } from "./routerPath/routerPath";
import { useSelector } from "react-redux";
import { StateRouter } from "./routerPath/RouterTypes";

export const Router: React.FC<object> = () => {
  const isAuth = useSelector((state: StateRouter) => state.auth.isAuth);

  return (
    <Switch>
      {isAuth ? (
        <React.Fragment>
          <Route exact strict path={route.home.path} component={route.home.component} />
          <Route exact strict path={route.createPost.path} component={route.createPost.component} />
          <Route exact strict path={route.profile.path} component={route.profile.component} />
          <Route exact strict path={[route.login.path, route.registration.path]}>
            <Redirect to={route.profile.path} />
          </Route>
          <Route path={route.post.path} component={route.post.component} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Route exact strict path={route.home.path} component={route.home.component} />
          <Route exact strict path={[route.profile.path, route.createPost.path]}>
            <Redirect to={route.login.path} />
          </Route>
          <Route exact strict path={route.login.path} component={route.login.component} />
          <Route
            exact
            strict
            path={route.registration.path}
            component={route.registration.component}
          />
          <Route path={route.post.path} component={route.post.component} />
        </React.Fragment>
      )}
    </Switch>
  );
};
