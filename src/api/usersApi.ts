import { axiosInstance } from "./instance";
import { UsersAPI } from "./types/UsersApiTypes";

const instance = axiosInstance("user/");

export const usersAPI: UsersAPI = {
  async getUserProfile() {
    const res = await instance.get("profile");
    return res.data;
  },
};
