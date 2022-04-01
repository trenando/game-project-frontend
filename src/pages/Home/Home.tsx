import React from "react";
import style from "./Home.module.scss";
import { HomeProfile } from "./HomeProfile/HomeProfile";
import { HomeFunction, ChangeUrl } from "./HomeTypes";
import { useNavigate } from "react-router";
import { HomePosts } from "./HomePosts/HomePosts";

export const Home: HomeFunction = ({ isLoading, postsList, isAuth, postList }) => {
  const navigate = useNavigate();

  const changeUrl: ChangeUrl = (page) => {
    navigate(`/?page=${page}&limit=${postsList.postsPerPage}`);
  };

  return (
    <section className={style.content}>
      {isAuth ? <HomeProfile /> : null}
      <HomePosts postsList={postsList} changeUrl={changeUrl} isLoading={isLoading} />
    </section>
  );
};
