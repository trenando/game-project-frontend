import React from "react";
import { ProfileFunction } from "./ProfileTypes";
import style from "./Profile.module.scss";

export const Profile: ProfileFunction = ({ login, name, postCount, subCount, isAuth, getMyProfile }) => {
  if (isAuth) {
    getMyProfile();
  };

  return (
    <div className={style.profile}>
      <div className={style.profile__item}>{login}</div>
      <div className={style.profile__item}>{name}</div>
      <div className={style.profile__item}>{postCount}</div>
      <div className={style.profile__item}>{subCount}</div>
    </div>
  );
};
