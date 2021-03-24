import React from "react";
import { Pagination } from "./Pagination";
import style from "./Paginator.module.scss";
import { OnClick, PaginatorFunction } from "./PaginatorTypes";

export const Paginator: PaginatorFunction = ({
  allPostsCount,
  currentPage,
  postsPerPage,
  changeUrl,
}) => {
  const pagination = new Pagination();
  const buttons: (number | string)[] = pagination
    .countPages(allPostsCount, postsPerPage)
    .paginate(currentPage);

  const onClick: OnClick = (e) => {
    changeUrl(e.currentTarget.value);
    e.stopPropagation();
  };

  return (
    <div className={style.paginator}>
      {buttons.map((el: number | string, index: number) => {
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
