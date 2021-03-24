import React from "react";
import { Link } from "react-router-dom";
import { route } from "../../routerPath/routerPath";
import style from "./PageNotFound.module.scss";

export const PageNotFound = () => {
  return (
    <section className={style.section}>
      <div className={style.error}>
        <span className={style.error__number}>404</span>
        <span className={style.error__message}>Данная страница не существует</span>
        <Link to={route.home.link} className={style.error__link}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};
