import { AxiosResponse } from "axios";

export type LoginResponse = {
    accessToken: string,
    refreshToken: string
} | string;

type LoginData = {
    email: string,
    password: string
};

type RegisterData = {
    login: string,
    email: string,
    password: string,
    name:string
};

export type AuthAPI = {
    postLogin({ email, password }: LoginData): Promise<AxiosResponse<LoginResponse>>;
    postRegister({ login, email, password, name }: RegisterData): Promise<AxiosResponse<string>>;
    deleteLogin(): Promise<AxiosResponse<string>>;
};