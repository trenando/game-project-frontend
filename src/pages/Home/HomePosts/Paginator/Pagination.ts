export class Pagination {
  private pageRange: number = 0;
  private extremeButtons: number = 0;
  private currentPage: number = 1;
  private pages: Array<number | string> = [];
  constructor(pageRange = 1, extremeButtons = 1) {
    this.pageRange = pageRange;
    this.extremeButtons = extremeButtons;
  }
  public countPages(allPostsCount: number, postsPerPage: number): this {
    const allPost: number = Math.ceil(allPostsCount / postsPerPage);
    for (let page = 1; page <= allPost; page++) this.pages.push(page);
    return this;
  }
  public paginate(currentPage: number): (number | string)[] {
    this.currentPage = currentPage;
    return this.displayingStyleOfButtons();
  }

  private displayingStyleOfButtons(): (number | string)[] {
    const minimumButtons: number = 5;
    if (
      this.pages.length >=
      minimumButtons + (2 * this.pageRange - 1) + (2 * this.extremeButtons - 1)
    ) {
      return this.activeButtons();
    } else return this.pages;
  }
  private activeButtons(): (number | string)[] {
    const leftRange: number = 1 + this.pageRange + this.extremeButtons;
    const rightRange: number = this.pages.length - this.extremeButtons - this.pageRange;
    if (this.currentPage <= leftRange) {
      return this.firstButtons();
    } else if (this.currentPage >= rightRange) {
      return this.lastButtons();
    } else {
      return this.middleButtons();
    }
  }

  private firstButtons(): (number | string)[] {
    const pages: Array<number | string> = [];
    for (let startButtons = 1; startButtons <= this.currentPage + this.pageRange; startButtons++) {
      pages.push(startButtons);
    }
    pages.push("...");
    for (
      let endButtons = this.pages.length;
      endButtons > this.pages.length - this.extremeButtons;
      endButtons--
    ) {
      pages.push(endButtons);
    }
    this.pages = pages;
    return this.pages;
  }
  private middleButtons(): (number | string)[] {
    const pages: Array<number | string> = [];
    for (let startButtons = 1; startButtons <= this.extremeButtons; startButtons++) {
      pages.push(startButtons);
    }
    pages.push("...");
    for (
      let middleButtons = this.currentPage - this.pageRange;
      middleButtons <= this.currentPage + this.pageRange;
      middleButtons++
    ) {
      pages.push(middleButtons);
    }
    pages.push("...");
    for (
      let endButtons = this.pages.length;
      endButtons > this.pages.length - this.extremeButtons;
      endButtons--
    ) {
      pages.push(endButtons);
    }
    this.pages = pages;
    return this.pages;
  }
  private lastButtons(): (number | string)[] {
    const pages: Array<number | string> = [];
    for (let startButtons = 1; startButtons <= this.extremeButtons; startButtons++) {
      pages.push(startButtons);
    }
    pages.push("...");
    for (
      let endButtons = this.currentPage - this.pageRange;
      endButtons <= this.pages.length;
      endButtons++
    ) {
      pages.push(endButtons);
    }
    this.pages = pages;
    return this.pages;
  }
}
