import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostId } from "../../api/types/PostsApiTypes";
import { getPostByIdThunkCreator, unmountPostAC } from "../../redux/actions/postsActions/getPostByIdActions";
import { Post } from "./Post";
import { GetPostDispatch, MemoPostProps, PostByIdState, PostProps, PostSelector, UnmountPostDispatch } from "./PostTypes";

export const PostContainer: React.FC<{}> = () => {
  const postId: PostId = useParams();
  const dispatch = useDispatch();
  const postSelector: PostSelector = useSelector(({ postById }: PostByIdState) => postById);

  const getPost: GetPostDispatch = useCallback((postId) => {
    dispatch(getPostByIdThunkCreator(postId));
  }, [dispatch])

  const unmountPost: UnmountPostDispatch = useCallback(()=>{
    dispatch(unmountPostAC());
  },[dispatch])

  const memoPostProps: MemoPostProps = useMemo(() => {
    return {
      ...postSelector, postId
    };
  }, [postSelector, postId]);

  const postProps: PostProps = {
    ...memoPostProps, getPost, unmountPost
  }

  return <Post {...postProps} />
}
