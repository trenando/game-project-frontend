import { connect } from "react-redux";
import { register } from "../../redux/actions/authActions/registerActions";
import { Registration } from "./Registration";
import { RegistrationDispatchTypes } from "./RegistrationTypes";

const mapDispatchToProps: RegistrationDispatchTypes = (dispatch) => {
    return {
        registration: (values) => {
            dispatch(register(values));
        }
    };
};

export const RegistrationContainer = connect(null, mapDispatchToProps)(Registration);