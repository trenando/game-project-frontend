import React, { useEffect } from "react";
import { useParams } from "react-router";
import { PostId } from "../../api/types/PostsApiTypes";
import style from "./Post.module.scss";
import { PostFunction } from "./PostTypes";

export const Post: PostFunction = ({ postById, getPost, unmountPost }) => {
  const postId: PostId = useParams();

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
          <h3 className={style.post__title}>{postById.postTitle}</h3>
          <div className={style.post__text}>{postById.postText}</div>
        </div>
        <div className={style.post__info}>
          <div>
            Пост написан: <span className={style.post__login}>{postById.login}</span>
          </div>
          <div>
            Опубликован: <span className={style.post__date}>{postById.date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
