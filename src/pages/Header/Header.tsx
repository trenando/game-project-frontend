import React from "react";
import style from "./Header.module.scss";
import { route } from "../../routerPath/routerPath";
import { Link } from "react-router-dom";
import { HeaderFunction, OnClick } from "./HeaderTypes";

export const Header: HeaderFunction = ({ isAuth, logout }) => {
  const onClick: OnClick = () => {
    logout();
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.link__block}>
          <Link to={route.home.link} className={style.link}>
            {route.home.name}
          </Link>
          {isAuth ? (
            <Link to={route.createPost.link} className={style.link}>
              {route.createPost.name}
            </Link>
          ) : null}
        </div>
        <div className={style.link__block}>
          {isAuth ? (
            <React.Fragment>
              <Link to={route.profile.link} className={style.link}>
                {route.profile.name}
              </Link>
              <button className={style.button} onClick={onClick}>
                Выход
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to={route.login.link} className={style.link}>
                {route.login.name}
              </Link>
              <Link to={route.registration.link} className={style.link}>
                {route.registration.name}
              </Link>
            </React.Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};
