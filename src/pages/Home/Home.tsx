import React from "react";
import style from "./Home.module.scss";
import { HomeProfile } from "./HomeProfile/HomeProfile";
import { HomeType } from "./HomeTypes";
import { PostsContainer } from "./Posts/PostsContainer";

export const Home: HomeType = () => {
  return (
    <div className={style.content}>
      <HomeProfile />
      <PostsContainer />
    </div>
  );
};
