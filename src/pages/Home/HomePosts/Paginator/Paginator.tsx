import React from "react";
import style from "./Paginator.module.scss";
import { paginatorLinks } from "./paginatorLinks";
import { OnClick, PaginatorType } from "./PaginatorTypes";

export const Paginator: PaginatorType = ({
  allPostsCount,
  currentPage,
  postsPerPage,
  changeUrl,
}) => {
  // * Нужен для указания количества кнопок слева и справа
  const pageRange = 1;
  // * Количество кнопок в начале и конце когда пользователь находится в середине
  const rangeButtons = 1;
  const buttons: (number | (string | number))[] = paginatorLinks(
    allPostsCount,
    currentPage,
    postsPerPage,
    pageRange,
    rangeButtons
  );

  const onClick: OnClick = (e) => {
    changeUrl(e.currentTarget.value);
  };

  return (
    <div className={style.paginator}>
      {buttons.map((el: number | (number | string), index: number) => {
        return el === "..." ? (
          <span key={index} className={style.paginator__dots}>
            {el}
          </span>
        ) : (
          <button
            key={index}
            className={
              currentPage === el
                ? `${style.paginator__link} ${style.active}`
                : style.paginator__link
            }
            value={el}
            onClick={onClick}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};
