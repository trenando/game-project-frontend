import React, { useEffect } from "react";
import { useLocation } from "react-router";
import style from "./HomePosts.module.scss";
import { PostsForm } from "./HomePostsForm/HomePostsForm";
import { HomePostsElement, HomePostsType, QueryParams } from "./HomePostsTypes";

export const HomePosts: HomePostsType = ({ posts, postsList, allPostsCount }) => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryParams: QueryParams = {
      page: query.get("page"),
      limit: query.get("limit"),
    };
    postsList(queryParams);
  }, [location, postsList]);

  /**
   * onClick Для h3 и posts__login
   * Необходимо реализовать при клике на h3
   * открытие поста по id а при клике на
   * posts__login открывать пользователя
   * */

  return (
    <div className={style.posts}>
      <div>
        <PostsForm />
        <ul className={style.posts__items}>
          {posts.length !== 0 &&
            posts.map((el: HomePostsElement, index: number) => {
              return (
                <li key={index} className={style.posts__item}>
                  <div className={style.posts__img}>
                    <img src="http://placehold.it/50x50" alt="img" />
                  </div>
                  <div className={style.posts__infoblock}>
                    <h3>{el.postTitle}</h3>
                    <div className={style.posts__userinfo}>
                      <span className={style.posts__login}>{el.login}</span>
                      <span className={style.posts__date}>{el.date}</span>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className={style.posts__pages}>
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  );
};
