import React from "react";
import style from "./Footer.module.scss";
import { FooterType } from "./FooterTypes";

export const Footer: FooterType = () => {
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <span>Game Project 2021</span>
      </div>
    </footer>
  );
};
