import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/actions/authActions/logoutActions";
import { Header } from "./Header";
import { HeaderStateToProps, HeaderDispatch } from "./HeaderTypes";

const mapStateToProps: HeaderStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

const mapDispatchToProps: HeaderDispatch = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutThunkCreator());
    },
  };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
