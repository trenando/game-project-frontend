import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunkCreator } from "../../redux/actions/postsActions/createPostActions";
import { CreatePost } from "./CreatePost";
import { CreatePostDispatch, CreatePostMessagesSelector, CreatePostProps, CreatePostState, MemoCreatePostProps } from "./CreatePostTypes";

export const CreatePostContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const createPostMessages: CreatePostMessagesSelector = useSelector(({ createPost }: CreatePostState) => createPost);

  const createPost: CreatePostDispatch = useCallback((values) => {
    dispatch(createPostThunkCreator(values));
  }, [dispatch])

  const memoCreatePostProps: MemoCreatePostProps = useMemo(() => {
    return {
      ...createPostMessages
    }
  }, [createPostMessages])

  const createPostProps: CreatePostProps = {
    ...memoCreatePostProps, createPost
  };

  return <CreatePost {...createPostProps} />
};
