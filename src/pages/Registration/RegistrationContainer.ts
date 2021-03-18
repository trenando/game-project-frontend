import { connect } from "react-redux";
import {
  registrationThunkCreator,
  unmountRegisterAC,
} from "../../redux/actions/authActions/registrationActions";
import { Registration } from "./Registration";
import { RegistrationDispatch, RegistrationStateToProps } from "./RegistrationTypes";

const mapStateToProps: RegistrationStateToProps = ({ registration }) => {
  return {
    errorMessage: registration.errorMessage,
    successMessage: registration.successMessage,
  };
};

const mapDispatchToProps: RegistrationDispatch = (dispatch) => {
  return {
    registration: (values) => {
      dispatch(registrationThunkCreator(values));
    },
    unmountRegistration: () => {
      dispatch(unmountRegisterAC());
    },
  };
};

export const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);
