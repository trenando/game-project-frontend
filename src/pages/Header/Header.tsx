import React from "react";
import style from "./Header.module.scss";
import { route } from "../../routerPath/routerPath";
import { Link } from "react-router-dom";
import { HeaderType, OnClick } from "./HeaderTypes";

export const Header: HeaderType = ({ isAuth, logout }) => {
  const onClick: OnClick = () => {
    logout();
  };

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.link__home}>
          <Link to="/" className={style.link}>
            {route.home.name}
          </Link>
        </div>
        <div className={style.link__user}>
          {isAuth ? (
            <React.Fragment>
              <Link to={route.profile.path} className={style.link}>
                {route.profile.name}
              </Link>
              <button className={style.button} onClick={onClick}>
                Выход
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to={route.login.path} className={style.link}>
                {route.login.name}
              </Link>
              <Link to={route.registration.path} className={style.link}>
                {route.registration.name}
              </Link>
            </React.Fragment>
          )}
        </div>
      </nav>
    </header>
  );
};
