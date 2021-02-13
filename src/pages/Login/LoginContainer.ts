import { connect } from "react-redux"
import { authorizationPost } from "../../redux/actions/authActions/authActions";
import { Login } from "./Login"
import { LoginDispatchType } from "./LoginTypes";

const mapDispatchToProps: LoginDispatchType = (dispatch) => {
    return {
        authorization: (values) => {
            dispatch(authorizationPost(values));
        }
    };
};

export const LoginContainer = connect(null, mapDispatchToProps)(Login);