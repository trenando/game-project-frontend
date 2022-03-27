import { axiosInstance } from "./instance";
import { PostsAPI } from "./types/PostsApiTypes";

const instance = axiosInstance("posts/");

export const postsAPI: PostsAPI = {
  async postItem({ postTitle, postText }) {
    const res = await instance.post("item", { postTitle, postText });
    return res;
  },
  async getList({ page, limit }) {
    const res = await instance.get("list", {
      params: {
        page,
        limit,
      },
    });
    console.log("ищем ошибку", res);
    return res;
  },
  async getPostById({ postId }) {
    const res = await instance.get(postId);
    return res;
  },
};
