import React, { useEffect } from "react";
import style from "./Post.module.scss";
import { PostFunction } from "./PostTypes";

export const Post: PostFunction = ({ postIdResponse, postId, getPost, unmountPost }) => {
  const { postTitle, postText, login, date } = postIdResponse;

  useEffect(() => {
    getPost(postId);
    return () => {
      unmountPost();
    };
  }, [postId, getPost, unmountPost]);

  return (
    <section className={style.section}>
      <div className={style.post}>
        <div>
          <h3 className={style.post__title}>{postTitle}</h3>
          <div className={style.post__text}>{postText}</div>
        </div>
        <div className={style.post__info}>
          <div>
            Пост написан: <span className={style.post__login}>{login}</span>
          </div>
          <div>
            Опубликован: <span className={style.post__date}>{date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
