import { connect } from "react-redux";
import { postsListGet } from "../../../redux/actions/postsActions/postsList";
import { HomePosts } from "./HomePosts";
import { HomePostsContainerProps, HomePostsDispatchType } from "./HomePostsTypes";

const mapStateToProps: HomePostsContainerProps = ({ postsList }) => {
  return {
    posts: postsList.posts,
    allPostsCount: postsList.allPostsCount,
    currentPage: postsList.currentPage,
    postsPerPage: postsList.postsPerPage,
  };
};

const mapDispatchToProps: HomePostsDispatchType = (dispatch) => {
  return {
    postsList: (query) => {
      dispatch(postsListGet(query));
    },
  };
};

export const HomePostsContainer = connect(mapStateToProps, mapDispatchToProps)(HomePosts);
