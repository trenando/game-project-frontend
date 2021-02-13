import { axiosInstance } from "./instance";
import { AuthAPI } from "./types/AuthApiTypes";

const instance = axiosInstance("auth/");

export const authAPI: AuthAPI = {
  async postLogin({ email, password }) {
    const res = await instance.post("login", { email, password });
    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    return res;
  },
  async postRegister({ login, email, password, name }) {
    const res = await instance.post("register", { login, email, password, name });
    return res;
  },
  async deleteLogin() {
    const res = await instance.delete("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    return res;
  },
};
