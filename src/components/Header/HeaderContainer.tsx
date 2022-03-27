import { useDispatch, useSelector } from "react-redux";
import { logoutThunkCreator } from "../../redux/actions/authActions/logoutActions";
import { Header } from "./Header";
import { AuthSelector, HeaderProps, HeaderState, LogoutDispatch } from "./HeaderTypes";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const auth: AuthSelector = useSelector(({ auth }: HeaderState) => auth);
  const logout: LogoutDispatch = () => dispatch(logoutThunkCreator());
  const headerProps: HeaderProps = {
    ...auth, logout
  };
  return <Header {...headerProps} />
}
