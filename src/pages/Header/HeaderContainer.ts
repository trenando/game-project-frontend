import { connect } from "react-redux";
import { logoutDelete } from "../../redux/actions/authActions/logoutActions";
import { Header } from "./Header";
import { HeaderContainerType, HeaderDispatchType } from "./HeaderTypes";

const mapStateToProps: HeaderContainerType = ({ auth }) => {
    return {
        isAuth: auth.isAuth
    };
};

const mapDispatchToProps: HeaderDispatchType = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutDelete());
        }
    };
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);