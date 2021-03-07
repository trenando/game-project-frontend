import { connect } from "react-redux";
import { postsListGet } from "../../../redux/actions/postsActions/postsList";
import { Posts } from "./Posts";
import { PostsContainerProps, PostsDispatchType } from "./PostsTypes";

const mapStateToProps: PostsContainerProps = ({ postsList }) => {
  return {
    posts: postsList.posts,
  };
};

const mapDispatchToProps: PostsDispatchType = (dispatch) => {
  return {
    postsList: (query) => {
      dispatch(postsListGet(query));
    },
  };
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
