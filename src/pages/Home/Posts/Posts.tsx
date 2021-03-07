import React, { useEffect } from "react";
import style from "./Posts.module.scss";
import { PostsForm } from "./PostsForm/PostsForm";
import { PostsElement, PostsType, QueryParams } from "./PostsTypes";
import { useQuery } from "./useQuery";

export const Posts: PostsType = ({ posts, postsList }) => {
  const query: URLSearchParams = useQuery();

  useEffect(() => {
    const queryParams: QueryParams = {
      page: query.get("page"),
      limit: query.get("limit"),
    };
    postsList(queryParams);
  }, [query, postsList]);

  return (
    <div className={style.posts}>
      <PostsForm />
      <ul className={style.posts__items}>
        {posts.length !== 0 &&
          posts.map((el: PostsElement, index: number) => {
            return (
              <li key={index} className={style.posts__item}>
                <div>
                  <img src="http://placehold.it/50x50" alt="img"/>
                </div>
                <div>
                  <h3>{el.title}</h3>
                  <div>
                    <span>{el.login}</span>
                    <span>{el.date}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
