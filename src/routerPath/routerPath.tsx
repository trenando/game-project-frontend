import { RegistrationContainer } from "../pages/Registration/RegistrationContainer";
import { LoginContainer } from "../pages/Login/LoginContainer";
import { ProfileContainer } from "../pages/Profile/ProfileContainer";
import { RouteType } from "./RouterTypes";
import { CreatePostContainer } from "../pages/CreatePost/CreatePostContainer";
import { PostContainer } from "../pages/Post/PostContainer";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { HomeContainer } from "../pages/Home/HomeContainer";

export const route: RouteType = {
  home: {
    path: "/",
    link: "/?page=1&limit=10",
    name: "Главная",
    component: HomeContainer,
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
  post: {
    path: "/posts/:postId",
    component: PostContainer,
  },
  pageNotFound: {
    path: "*",
    component: PageNotFound,
  },
};
