import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { route } from "./routerPath/routerPath";
import { useSelector } from "react-redux";
import { StateRouter } from "./routerPath/RouterTypes";

export const Router: React.FC<{}> = () => {
  const isAuth: boolean = useSelector((state: StateRouter) => state.auth.isAuth);
  return (
    <Routes>
      <Route path={route.home.path} element={route.home.element} />
      <Route path={route.post.path} element={route.post.element} />
      <Route path={route.login.path} element={
        isAuth ?
          <Navigate to={route.profile.path} />
          :
          route.login.element} />
      <Route path={route.registration.path} element={
        isAuth ?
          <Navigate to={route.profile.path} />
          :
          route.registration.element} />
      <Route path={route.profile.path} element={
        isAuth ?
          route.profile.element
          :
          <Navigate to={route.login.path} />} />
      <Route path={route.createPost.path} element={
        isAuth ?
          route.createPost.element
          :
          <Navigate to={route.login.path} />} />
      <Route path={route.pageNotFound.path} element={route.pageNotFound.element} />
    </Routes>
  );
};
