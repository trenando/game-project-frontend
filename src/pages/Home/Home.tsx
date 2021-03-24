import React, { useEffect } from "react";
import style from "./Home.module.scss";
import { HomeProfile } from "./HomeProfile/HomeProfile";
import { HomeFunction, QueryParams, ChangeUrl } from "./HomeTypes";
import { useHistory, useLocation } from "react-router";
import { HomePosts } from "./HomePosts/HomePosts";

export const Home: HomeFunction = ({ isLoading, homePostsProps, isAuth, postList }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryParams: QueryParams = {
      page: query.get("page"),
      limit: query.get("limit"),
    };
    postList(queryParams);
  }, [location, postList]);

  const changeUrl: ChangeUrl = (page) => {
    history.push(`/?page=${page}&limit=${homePostsProps.postsPerPage}`);
  };

  return (
    <section className={style.content}>
      {isAuth ? <HomeProfile /> : null}
      <HomePosts homeState={homePostsProps} changeUrl={changeUrl} isLoading={isLoading} />
    </section>
  );
};
