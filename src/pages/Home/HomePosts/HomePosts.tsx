import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import style from "./HomePosts.module.scss";
import { PostsForm } from "./HomePostsForm/HomePostsForm";
import { ChangeUrl, HomePostsElement, HomePostsType, QueryParams } from "./HomePostsTypes";
import { Paginator } from "./Paginator/Paginator";

export const HomePosts: HomePostsType = ({
  posts,
  postsList,
  allPostsCount,
  currentPage,
  postsPerPage,
}) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryParams: QueryParams = {
      page: query.get("page"),
      limit: query.get("limit"),
    };
    postsList(queryParams);
  }, [location, postsList]);

  const changeUrl:ChangeUrl = (page) => {
    history.push(`/?page=${page}&limit=${postsPerPage}`);
  };

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
      <Paginator
        allPostsCount={allPostsCount}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        changeUrl={changeUrl}
      />
    </div>
  );
};
