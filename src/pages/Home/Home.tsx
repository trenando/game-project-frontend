import React from "react";
import style from "./Home.module.scss";
import { HomeProfile } from "./HomeProfile/HomeProfile";
import { HomeType } from "./HomeTypes";
import { HomePostsContainer } from "./HomePosts/HomePostsContainer";

export const Home: HomeType = () => {
  return (
    <section className={style.content}>
      <HomeProfile />
      <HomePostsContainer />
    </section>
  );
};
