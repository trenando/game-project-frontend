import { connect } from "react-redux";
import { authorizationThunkCreator, unmountLoginAC } from "../../redux/actions/authActions/authActions";
import { Login } from "./Login";
import { LoginStateToProps, LoginDispatch } from "./LoginTypes";

const mapStateToProps: LoginStateToProps = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage,
  };
};

const mapDispatchToProps: LoginDispatch = (dispatch) => {
  return {
    authorization: (values) => {
      dispatch(authorizationThunkCreator(values));
    },
    unmountLogin: () => {
      dispatch(unmountLoginAC());
    },
  };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
