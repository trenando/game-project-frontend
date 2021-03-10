import { RegistrationContainer } from "../pages/Registration/RegistrationContainer";
import { LoginContainer } from "../pages/Login/LoginContainer";
import { ProfileContainer } from "../pages/Profile/ProfileContainer";
import { RouteType } from "./RouterTypes";
import { Home } from "../pages/Home/Home";
import { CreatePostContainer } from "../pages/CreatePost/CreatePostContainer";

export const route: RouteType = {
  home: {
    path: "/",
    link: "/?page=1&limit=10",
    name: "Главная",
    component: Home,
  },
  profile: {
    path: "/profile",
    link: "/profile",
    name: "Профиль",
    component: ProfileContainer,
  },
  login: {
    path: "/login",
    link: "/login",
    name: "Логин",
    component: LoginContainer,
  },
  registration: {
    path: "/registration",
    link: "/registration",
    name: "Регистрация",
    component: RegistrationContainer,
  },
  createPost: {
    path: "/post/create",
    link: "/post/create",
    name: "Написать пост",
    component: CreatePostContainer,
  },
};
