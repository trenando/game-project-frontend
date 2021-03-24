import { connect } from "react-redux";
import { postsListThunkCreator } from "../../redux/actions/postsActions/postsListActions";
import { Home } from "./Home";
import { HomeDispatch, HomeStateToProps } from "./HomeTypes";

const mapStateToProps: HomeStateToProps = ({ postsList, preloader, auth }) => {
  return {
    homePostsProps: postsList,
    isAuth: auth.isAuth,
    isLoading: preloader.isLoading,
  };
};

const mapDispatchToProps: HomeDispatch = (dispatch) => {
  return {
    postList: (query) => {
      dispatch(postsListThunkCreator(query));
    },
  };
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
