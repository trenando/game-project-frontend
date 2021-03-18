import { connect } from "react-redux";
import { postsListGet } from "../../../redux/actions/postsActions/postsListActions";
import { HomePosts } from "./HomePosts";
import { HomePostsStateToProps, HomePostsDispatch } from "./HomePostsTypes";

const mapStateToProps: HomePostsStateToProps = ({ postsList }) => {
  return {
    posts: postsList.posts,
    allPostsCount: postsList.allPostsCount,
    currentPage: postsList.currentPage,
    postsPerPage: postsList.postsPerPage,
  };
};

const mapDispatchToProps: HomePostsDispatch = (dispatch) => {
  return {
    postsList: (query) => {
      dispatch(postsListGet(query));
    },
  };
};

export const HomePostsContainer = connect(mapStateToProps, mapDispatchToProps)(HomePosts);
