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
    element: <HomeContainer />,
  },
  profile: {
    path: "/profile",
    link: "/profile",
    name: "Профиль",
    element: <ProfileContainer />,
  },
  login: {
    path: "/login",
    link: "/login",
    name: "Логин",
    element: <LoginContainer />,
  },
  registration: {
    path: "/registration",
    link: "/registration",
    name: "Регистрация",
    element: <RegistrationContainer />,
  },
  createPost: {
    path: "/post/create",
    link: "/post/create",
    name: "Написать пост",
    element: <CreatePostContainer />,
  },
  post: {
    path: "/posts/:postId",
    element: <PostContainer />,
  },
  pageNotFound: {
    path: "*",
    element: <PageNotFound />,
  },
};
