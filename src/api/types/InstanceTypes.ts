import { AxiosInstance } from "axios";

export type RefreshTokenResponse = {
    accessToken: string
};

export type AxiosInstanceType = (path: string) => AxiosInstance;

export type IsExpired = (token: string | null) => Promise<null | undefined>