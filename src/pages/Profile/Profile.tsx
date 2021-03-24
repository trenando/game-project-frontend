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
            <img src="http://placehold.it/250x250" alt="img" />
          </div>
          <div className={style.profile__userinfo}>
            <div>
              Логин: <span>{login}</span>
            </div>
            <div>
              Имя: <span>{name}</span>
            </div>
            <div>
              Фамилия: <span>{surname ? surname : "Введите фамилию"}</span>
            </div>
            <div>
              Пол: <span>{gender ? gender : "Заглушка на гендер"}</span>
            </div>
            <div>
              Возраст: <span>{age ? age : "Заглушка на возраст"}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            Количество постов: <span>{postCount}</span>
          </div>
          <div>
            Число Подписчиков: <span>{subCount}</span>
          </div>
          <div>
            <Link to="/">Управление Постами</Link>
          </div>
          <div>
            <Link to="/">Мои подписки</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
