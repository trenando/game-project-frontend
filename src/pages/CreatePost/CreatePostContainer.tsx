import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunkCreator } from "../../redux/actions/postsActions/createPostActions";
import { CreatePost } from "./CreatePost";
import { CreatePostDispatch, CreatePostMessagesSelector, CreatePostProps, CreatePostState } from "./CreatePostTypes";

export const CreatePostContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const createPostMessages: CreatePostMessagesSelector = useSelector(({ createPost }: CreatePostState) => createPost);
  const createPost: CreatePostDispatch = (values) => dispatch(createPostThunkCreator(values));
  const createPostProps: CreatePostProps = {
    ...createPostMessages, createPost
  };
  return <CreatePost {...createPostProps} />
};
