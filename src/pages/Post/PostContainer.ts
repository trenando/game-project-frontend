import { connect } from "react-redux";
import { getPostById, unmountPostAC } from "../../redux/actions/postsActions/getPostById";
import { Post } from "./Post";
import { PostContainerType, PostDispatchType } from "./PostTypes";

const mapStateToProps: PostContainerType = ({ postById }) => {
  return {
    postById: postById.postId,
  };
};

const mapDispatchToProps: PostDispatchType = (dispatch) => {
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
