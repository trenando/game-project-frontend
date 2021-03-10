import axios, { AxiosInstance, AxiosResponse } from "axios";
import { AxiosInstanceType, IsExpired, RefreshTokenResponse } from "./types/InstanceTypes";

export const axiosInstance: AxiosInstanceType = (path) => {
  const instance: AxiosInstance = axios.create({
    baseURL: `/${path}`,
  });

  instance.interceptors.request.use(async (config) => {
    const token: string | null = localStorage.getItem("token");
    try {
      await isExpired(token);
    } catch (err) {
      console.error(err);
    }
    config.headers = { token: `Bearer ${token}` };
    return config;
  });

  return instance;
};

const isExpired: IsExpired = async (token: string | null) => {
  if (!token) return null;
  let expireTime: number = JSON.parse(atob(token.split(".")[1])).exp;
  expireTime *= 1000;
  if (Date.now() > expireTime) {
    const instance: AxiosInstance = axios.create({
      baseURL: "/",
    });
    const updateToken: AxiosResponse<RefreshTokenResponse> = await instance.post("auth/token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    localStorage.setItem("token", updateToken.data.accessToken);
  }
};
