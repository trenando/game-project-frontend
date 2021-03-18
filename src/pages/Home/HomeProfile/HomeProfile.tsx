import React from "react";
import style from "./HomeProfile.module.scss";
import { HomeProfileFunction } from "./HomeProfileTypes";

export const HomeProfile: HomeProfileFunction = () => {
  return <div className={style.profile}>profile</div>;
};
