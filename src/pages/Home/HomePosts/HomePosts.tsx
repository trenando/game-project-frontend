import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import style from "./HomePosts.module.scss";
import { PostsForm } from "./HomePostsForm/HomePostsForm";
import { HomePostsElement, HomePostsFunction, NewUrl } from "./HomePostsTypes";
import { Paginator } from "./Paginator/Paginator";

export const HomePosts: HomePostsFunction = ({ homeState, changeUrl, isLoading }) => {
  const newUrl: NewUrl = (page) => {
    changeUrl(page);
  };

  return (
    <div className={style.posts}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <PostsForm />
            <ul className={style.posts__items}>
              {homeState.posts.length !== 0 &&
                homeState.posts.map((el: HomePostsElement, index: number) => {
                  return (
                    <li key={index} className={style.posts__item}>
                      <div className={style.posts__img}>
                        <img src="http://placehold.it/50x50" alt="img" />
                      </div>
                      <div className={style.posts__infoblock}>
                        <Link to={`/posts/${el.postId}`} className={style.posts__link}>
                          <h3>{el.postTitle}</h3>
                        </Link>
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
            allPostsCount={homeState.allPostsCount}
            currentPage={homeState.currentPage}
            postsPerPage={homeState.postsPerPage}
            changeUrl={newUrl}
          />
        </>
      )}
    </div>
  );
};
