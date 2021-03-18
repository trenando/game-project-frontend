import React from "react";
import style from "./CreatePost.module.scss";
import { CreatePostForm } from "./CreatePostForm/CreatePostForm";
import { CreatePostFunction, OnSubmit } from "./CreatePostTypes";

export const CreatePost: CreatePostFunction = ({
  createPost,
  successMessage,
  errorMessage,
}) => {
  const onSubmit: OnSubmit = (values: any) => {
    createPost(values);
  };

  return (
    <section className={style.section}>
      <CreatePostForm
        onSubmit={onSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </section>
  );
};
