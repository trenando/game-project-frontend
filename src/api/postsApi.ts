import { axiosInstance } from "./instance";
import { PostsAPI } from "./types/PostsApiTypes";

const instance = axiosInstance("posts/");

export const postsAPI: PostsAPI = {
  async postItem({ title, text }) {
    const res = await instance.post("item", { title, text });
    return res;
  },
  async getList({ page, limit }) {
    const res = await instance.get("list", {
      params: {
        page,
        limit,
      },
    });
    return res;
  },
};
