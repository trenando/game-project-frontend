import { connect } from "react-redux";
import { authorizationPost, loginUnmountAC } from "../../redux/actions/authActions/authActions";
import { Login } from "./Login";
import { LoginContainerType, LoginDispatchType } from "./LoginTypes";

const mapStateToProps: LoginContainerType = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage,
  };
};

const mapDispatchToProps: LoginDispatchType = (dispatch) => {
  return {
    authorization: (values) => {
      dispatch(authorizationPost(values));
    },
    loginUnmount: () => {
      dispatch(loginUnmountAC());
    },
  };
};

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
