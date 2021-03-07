import { AxiosResponse } from "axios";

type ItemData = {
  title: string;
  text: string;
};

type PostItem = {
  postId: number;
  title: string;
  login: string;
  date: string;
};

type ListResponse = {
  postsCount: number;
  posts: PostItem[];
};

export type ListData = {
  page: string | null;
  limit: string | null;
};

export type PostsAPI = {
  postItem({ title, text }: ItemData): Promise<AxiosResponse<string>>;
  getList({ page, limit }: ListData): Promise<AxiosResponse<ListResponse>>;
};
