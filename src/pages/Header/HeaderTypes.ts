import { ThunkDispatch } from "redux-thunk";

type HeaderProps = {
  isAuth: Boolean;
  logout: () => void;
};

type HeaderFromState = {
  isAuth: Boolean;
};

type HeaderState = {
  auth: {
    isAuth: Boolean;
  };
};

export type HeaderDispatch = (
  dispatch: ThunkDispatch<{}, void, any>
) => {
  logout: () => void;
};

export type OnClick = () => void;

export type HeaderFunction = ({ isAuth, logout }: HeaderProps) => JSX.Element;

export type HeaderStateToProps = ({ auth }: HeaderState) => HeaderFromState;
