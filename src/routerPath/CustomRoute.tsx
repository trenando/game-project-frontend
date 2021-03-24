import React from "react";
import { CustomRouteFunction } from "./RouterTypes";

export const CustomRoute: CustomRouteFunction = ({ component: Component }) => <Component />;
