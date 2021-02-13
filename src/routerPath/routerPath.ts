import { RegistrationContainer } from "../pages/Registration/RegistrationContainer";
import { LoginContainer } from "../pages/Login/LoginContainer";
import { ProfileContainer } from "../pages/Profile/ProfileContainer";
import { RouteType } from "./RouterTypes";
import { Home } from "../pages/Home/Home";

export const route: RouteType = {
    home:{
        path:"/",
        name:"Главная",
        component: Home
    },
    profile: {
        path: "/profile",
        name: "Профиль",
        component: ProfileContainer
    },
    login: {
        path: "/login",
        name: "Логин",
        component: LoginContainer
    },
    registration: {
        path: "/registration",
        name: "Регистрация",
        component: RegistrationContainer
    }
};