import React from "react";
import { ProfileFunction } from "./ProfileTypes";
import style from "./Profile.module.scss";
import { Link } from "react-router-dom";

export const Profile: ProfileFunction = (props) => {
  const { login, name, surname, gender, age, postCount, subCount, isAuth, getMyProfile } = props;
  if (isAuth) {
    getMyProfile();
  }

  return (
    <section className={style.section}>
      <div className={style.profile}>
        <div className={style.profile__block}>
          <div className={style.profile__img}>
            <img src="http://placehold.it/200x200" alt="img" />
            <div className={style.profile__img_changer}>
              <button>Изменить фото</button>
            </div>
          </div>
          <div className={style.profile__userinfo}>
            <div>
              Логин: <span>{login}</span>
            </div>
            <div>
              Имя: <span>{name}</span>
            </div>
            <div>
              Фамилия: <span>{surname ? surname : "Непонятная"}</span>
            </div>
            <div>
              Пол: <span>{gender ? gender : "Мужчина"}</span>
            </div>
            <div>
              Возраст: <span>{age ? age : "33"}</span>
            </div>
          </div>
        </div>
        <div className={style.profile__control}>
          <div className={style.profile__counts}>
            <div className={style.profile__count}>
              Количество постов: <span>{postCount}</span>
            </div>
            <div className={style.profile__count}>
              Число Подписчиков: <span>{subCount}</span>
            </div>
          </div>
          <div className={style.profile__links}>
            <Link to="/" className={style.profile__link}>
              <span>Управление Постами</span>
            </Link>
            <Link to="/" className={style.profile__link}>
              <span>Мои подписки</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
