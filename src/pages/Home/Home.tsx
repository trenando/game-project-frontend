import React from "react";
import style from "./Home.module.scss";
import { HomeProfile } from "./HomeProfile/HomeProfile";
import { HomeFunction } from "./HomeTypes";
import { HomePostsContainer } from "./HomePosts/HomePostsContainer";

export const Home: HomeFunction = () => {
  return (
    <section className={style.content}>
      <HomeProfile />
      <HomePostsContainer />
    </section>
  );
};
