import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsListThunkCreator } from "../../redux/actions/postsActions/postsListActions";
import { Home } from "./Home";
import { AuthSelector, AuthState, HomeProps, HomeState, PostListDispatch, PostsListSelector, PreloaderSelector, PreloaderState } from "./HomeTypes";

export const HomeContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const postsList: PostsListSelector = useSelector(({ postsList }: HomeState) => postsList);
  const preloader: PreloaderSelector = useSelector(({ preloader }: PreloaderState) => preloader);
  const auth: AuthSelector = useSelector(({ auth }: AuthState) => auth);
  const postList: PostListDispatch = (query) => dispatch(postsListThunkCreator(query));
  const homeProps: HomeProps = {
    postsList, ...preloader, ...auth, postList
  }
  return <Home {...homeProps} />
}
