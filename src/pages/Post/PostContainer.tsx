import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostId } from "../../api/types/PostsApiTypes";
import { getPostByIdThunkCreator, unmountPostAC } from "../../redux/actions/postsActions/getPostByIdActions";
import { Post } from "./Post";
import { GetPostDispatch, PostByIdState, PostProps, PostSelector, UnmountPostDispatch } from "./PostTypes";

export const PostContainer: React.FC<{}> = () => {
  const postId: PostId = useParams();
  const dispatch = useDispatch();
  const postSelector: PostSelector = useSelector(({ postById }: PostByIdState) => postById);
  const getPost: GetPostDispatch = (postId) => dispatch(getPostByIdThunkCreator(postId));
  const unmountPost: UnmountPostDispatch = () => dispatch(unmountPostAC());
  const postProps: PostProps = {
    ...postSelector, postId, getPost, unmountPost
  };
  return <Post {...postProps} />
}
