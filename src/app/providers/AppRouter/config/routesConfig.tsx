import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

enum RoutePath {
  MAIN = "/",
  ABOUT = "/about",
}

export const routeObjects: RouteObject[] = [
  { path: RoutePath.MAIN, element: <HomePageLazy /> },
  { path: RoutePath.ABOUT, element: <AboutPageLazy /> },
];
