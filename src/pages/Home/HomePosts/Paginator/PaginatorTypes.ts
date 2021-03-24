import React, { MouseEvent } from "react";
import { NewUrl } from "../HomePostsTypes";

type PaginatorProps = {
  allPostsCount: number;
  currentPage: number;
  postsPerPage: number;
  changeUrl: NewUrl;
};

export type OnClick = (e: MouseEvent<HTMLButtonElement>) => void;

export type PaginatorLinks = (
  allPostsCount: number,
  currentPage: number,
  postsPerPage: number,
  pageRange: number,
  rangeButtons: number
) => Array<string | number> | Array<number>;

export type SortLinksArray = (
  currentPage: number,
  pageRange: number,
  pages: number[],
  rangeButtons: number
) => Array<string | number>;

export type PaginatorFunction = React.FC<PaginatorProps>;
