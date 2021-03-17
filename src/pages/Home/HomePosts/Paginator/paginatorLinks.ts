import { PaginatorLinks, SortLinksArray } from "./PaginatorTypes";

const sortLinksArray: SortLinksArray = (currentPage, pageRange, pages, rangeButtons) => {
  // * Граница левых значений страниц до разделения ...
  const leftRange: number = 2 + pageRange + rangeButtons;

  // * Граница правых значений страниц до разделения ...
  const rightRange: number = pages.length - 3 - pageRange;

  let pagesArray: Array<string | number> = [];

  if (currentPage < leftRange) {
    // * Первые кнопки
    for (let i = 1; i <= currentPage + pageRange; i++) pagesArray.push(i);
    pagesArray.push("...");
    // * Последние кнопки
    for (let i = pages.length; i > pages.length - rangeButtons; i--) pagesArray.push(i);
    return pagesArray;
  } else if (currentPage > rightRange) {
    // * Первые кнопки
    for (let i = 1; i <= rangeButtons; i++) {
      pagesArray.push(i);
    }
    pagesArray.push("...");
    // * Последние кнопки
    for (let i = currentPage - pageRange; i <= pages.length; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  } else {
    // * Первые кнопки
    for (let i = 1; i <= rangeButtons; i++) {
      pagesArray.push(i);
    }
    pagesArray.push("...");
    // * Промежуточные кнопки
    for (let i = currentPage - pageRange; i <= currentPage + pageRange; i++) {
      pagesArray.push(i);
    }
    pagesArray.push("...");
    // * Последние кнопки
    for (let i = pages.length; i > pages.length - rangeButtons; i--) {
      pagesArray.push(i);
    }
    return pagesArray;
  }
};

export const paginatorLinks: PaginatorLinks = (
  allPostsCount,
  currentPage,
  postsPerPage,
  pageRange,
  rangeButtons
) => {
  const pages: Array<number> = [];
  const allPosts: number = Math.ceil(allPostsCount / postsPerPage);
  for (let i = 1; i <= allPosts; i++) pages.push(i);
  if (allPosts > 10) {
    const buttons: Array<string | number> = sortLinksArray(currentPage, pageRange, pages, rangeButtons);
    return buttons;
  } else {
    return pages;
  }
};
