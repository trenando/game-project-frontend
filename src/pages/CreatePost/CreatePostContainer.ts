import { connect } from "react-redux";
import { createPostThunkCreator } from "../../redux/actions/postsActions/createPostActions";
import { CreatePost } from "./CreatePost";
import { CreatePostDispatch, CreatePostStateToProps } from "./CreatePostTypes";

const mapStateToProps: CreatePostStateToProps = ({ createPost }) => {
  return {
    successMessage: createPost.successMessage,
    errorMessage: createPost.errorMessage,
  };
};

const mapDispatchToProps: CreatePostDispatch = (dispatch) => {
  return {
    createPost: (values) => {
      dispatch(createPostThunkCreator(values));
    },
  };
};

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost);
