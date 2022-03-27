import { FC } from "react";

export type ProfileSelector = {
  login: string | null;
  name: string | null;
  surname: string | null;
  gender: "male" | "female" | null;
  age: number | null;
  postCount: number | null;
  subCount: number | null;
  isAuth: Boolean;
};

export type AuthSelector = {
  isAuth: Boolean;
};

export type ProfileState = {
  profile: ProfileSelector
};

export type AuthState = {
  auth: AuthSelector
};

export type GetMyProfileDispatch = () => void;

export type ProfileProps = {
  login: string | null;
  name: string | null;
  surname: string | null;
  gender: "male" | "female" | null;
  age: number | null;
  postCount: number | null;
  subCount: number | null;
  isAuth: Boolean;
  getMyProfile: () => void;
};

export type ProfileFunction = FC<ProfileProps>;
