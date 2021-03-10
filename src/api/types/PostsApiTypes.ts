import { AxiosResponse } from "axios";

type ItemData = {
  postTitle: string;
  postText: string;
};

type PostItem = {
  postId: number;
  postTitle: string;
  login: string;
  date: string;
};

export type ListResponse = {
  postsCount: number;
  posts: PostItem[];
};

export type ListData = {
  page: string | null;
  limit: string | null;
};

export type PostsAPI = {
  postItem({ postTitle, postText }: ItemData): Promise<AxiosResponse<string>>;
  getList({ page, limit }: ListData): Promise<AxiosResponse<ListResponse>>;
};
