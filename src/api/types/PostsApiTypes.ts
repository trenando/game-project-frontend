import { AxiosResponse } from "axios";
import { Params } from "react-router-dom";
import { CreatePostValues } from "../../pages/CreatePost/CreatePostTypes";
import { QueryParams } from "../../pages/Home/HomeTypes";

type PostItem = {
  postId: string;
  postTitle: string;
  login: string;
  date: string;
};

export type PostId = Readonly<Params<string>>

export type PostIdResponse = {
  date: string;
  login: string;
  postText: string;
  postTitle: string;
};

export type ListResponse = {
  postsCount: number;
  posts: PostItem[];
};

export type PostsAPI = {
  postItem({ postTitle, postText }: CreatePostValues): Promise<AxiosResponse<string>>;
  getList({ page, limit }: QueryParams): Promise<AxiosResponse<ListResponse>>;
  getPostById({ postId }: PostId): Promise<AxiosResponse<PostIdResponse>>;
};
