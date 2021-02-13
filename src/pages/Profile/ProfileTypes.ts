import { Action } from "redux";
import React from 'react';
import { ThunkDispatch } from "redux-thunk";
import { GetProfile } from "../../redux/actions/profileActions/types/ProfileActionsTypes";

type ProfileFromState = {
    login: string | null,
    name: string | null,
    postCount: number | null,
    subCount: number | null,
    isAuth: Boolean,
};

type ProfileState = {
    profile: ProfileFromState,
    auth: {
        isAuth: Boolean
    }
};

export type ProfileProps = {
    login: string | null,
    name: string | null,
    postCount: number | null,
    subCount: number | null,
    isAuth: Boolean,
    getMyProfile: () => void
};

export type ProfileContainerTypes = ({ profile, auth }: ProfileState) => ProfileFromState;

export type ProfileTypes = React.FC<ProfileProps>

export type ProfileDispatch = (dispatch: ThunkDispatch<{}, void, Action<GetProfile>>) => {
    getMyProfile: () => void
};