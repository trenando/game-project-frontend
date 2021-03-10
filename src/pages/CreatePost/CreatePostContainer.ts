import { connect } from "react-redux";
import { createPost } from "../../redux/actions/postsActions/createPost";
import { CreatePost } from "./CreatePost";
import { CreatePostDispatch, CreatePostContainerType } from "./CreatePostTypes";

const mapStateToProps: CreatePostContainerType = ({ createPost }) => {
  return {
    successMessage: createPost.successMessage,
    errorMessage: createPost.errorMessage,
  };
};

const mapDispatchToProps: CreatePostDispatch = (dispatch) => {
  return {
    createPost: (values) => {
      dispatch(createPost(values));
    },
  };
};

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);
