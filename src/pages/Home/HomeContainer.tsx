import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { postsListThunkCreator } from "../../redux/actions/postsActions/postsListActions";
import { Home } from "./Home";
import { AuthSelector, AuthState, HomeProps, HomeState, PostListDispatch, PostsListSelector, PreloaderSelector, PreloaderState, QueryParams } from "./HomeTypes";

export const HomeContainer: React.FC<{}> = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const postsList: PostsListSelector = useSelector(({ postsList }: HomeState) => postsList);
  const preloader: PreloaderSelector = useSelector(({ preloader }: PreloaderState) => preloader);
  const auth: AuthSelector = useSelector(({ auth }: AuthState) => auth);

  const memoizedPostList: PostListDispatch = useCallback((query) => {
    dispatch(postsListThunkCreator(query))
  }, [dispatch]);

  const homeProps: HomeProps = useMemo(() => {
    return {
      postsList, ...preloader, ...auth
    }
  }, [postsList, preloader, auth]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryParams: QueryParams = {
      page: query.get("page"),
      limit: query.get("limit"),
    };
    memoizedPostList(queryParams);
  }, [location, memoizedPostList]);

  return <Home {...homeProps} />
}
