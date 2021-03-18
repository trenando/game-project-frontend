import { AxiosResponse } from "axios";
import { AuthorizationValues } from "../../pages/Login/LoginTypes";
import { RegistrationValues } from "../../pages/Registration/RegistrationTypes";

export type LoginResponse =
  | {
      accessToken: string;
      refreshToken: string;
    }
  | string;

export type AuthAPI = {
  postLogin({ email, password }: AuthorizationValues): Promise<AxiosResponse<LoginResponse>>;
  postRegister({
    login,
    email,
    password,
    name,
    surname,
    gender,
    age,
  }: RegistrationValues): Promise<AxiosResponse<string>>;
  deleteLogin(): Promise<AxiosResponse<string>>;
};
