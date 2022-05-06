import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registrationThunkCreator,
  unmountRegisterAC,
} from "../../redux/actions/authActions/registrationActions";
import { Registration } from "./Registration";
import { RegistrationDispatch, RegistrationMemoProps, RegistrationProps, RegistrationSelector, RegistrationState, UnmountRegistrationDispatch } from "./RegistrationTypes";

export const RegistrationContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const registrationSelector: RegistrationSelector = useSelector(({ registration }: RegistrationState) => registration);

  const registration: RegistrationDispatch = useCallback((values) => {
    dispatch(registrationThunkCreator(values));
  }, [dispatch])

  const unmountRegistration: UnmountRegistrationDispatch = useCallback(() => {
    dispatch(unmountRegisterAC())
  }, [dispatch])

  useEffect(() => {
    return () => {
      unmountRegistration();
    };
  }, [unmountRegistration]);

  const registrationMemoProps: RegistrationMemoProps = useMemo(() => {
    return {
      ...registrationSelector
    }
  }, [registrationSelector])

  const registrationProps: RegistrationProps = {
    ...registrationMemoProps, registration
  }

  return <Registration {...registrationProps} />
}
