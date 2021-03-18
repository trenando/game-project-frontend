import React from "react";
import style from "./Footer.module.scss";
import { FooterFunction } from "./FooterTypes";

export const Footer: FooterFunction = () => {
  return (
    <footer className={style.footer}>
      <div className={style.text}>
        <span>Game Project 2021</span>
      </div>
    </footer>
  );
};
