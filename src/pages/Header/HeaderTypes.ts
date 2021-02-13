import { ThunkDispatch } from "redux-thunk";

type HeaderPropsTypes = {
    isAuth: Boolean,
    logout: () => void
};

type HeaderFromState = {
    isAuth: Boolean
};

type HeaderStateType = {
    auth: {
        isAuth: Boolean
    }
};

export type HeaderDispatchType = (dispatch: ThunkDispatch<{}, void, any>) => {
    logout: () => void
};

export type OnClick = () => void;

export type HeaderType = ({ isAuth, logout }: HeaderPropsTypes) => JSX.Element;

export type HeaderContainerType = ({ auth }: HeaderStateType) => HeaderFromState