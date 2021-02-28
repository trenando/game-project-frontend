import { connect } from "react-redux";
import { register, registerUnmountAC } from "../../redux/actions/authActions/registerActions";
import { Registration } from "./Registration";
import { RegistrationDispatchTypes, RegisterContainerType } from "./RegistrationTypes";

const mapStateToProps: RegisterContainerType = ({ register }) => {
  return {
    errorMessage: register.errorMessage,
    successMessage: register.successMessage,
  };
};

const mapDispatchToProps: RegistrationDispatchTypes = (dispatch) => {
  return {
    registration: (values) => {
      dispatch(register(values));
    },
    registerUnmount: () => {
      dispatch(registerUnmountAC());
    },
  };
};

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);
