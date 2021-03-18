import { connect } from "react-redux";
import { getPostById, unmountPostAC } from "../../redux/actions/postsActions/getPostByIdActions";
import { Post } from "./Post";
import { PostStateToProps, PostDispatch } from "./PostTypes";

const mapStateToProps: PostStateToProps = ({ postById }) => {
  return {
    postById: postById.postId,
  };
};

const mapDispatchToProps: PostDispatch = (dispatch) => {
  return {
    getPost: (postId) => {
      dispatch(getPostById(postId));
    },
    unmountPost: () => {
      dispatch(unmountPostAC());
    },
  };
};

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
