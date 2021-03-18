import { AxiosResponse } from "axios";
import { CreatePostValues } from "../../pages/CreatePost/CreatePostTypes";
import { QueryParams } from "../../pages/Home/HomePosts/HomePostsTypes";

type PostItem = {
  postId: string;
  postTitle: string;
  login: string;
  date: string;
};

export type PostId = {
  postId: string;
};

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
