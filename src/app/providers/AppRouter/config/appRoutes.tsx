import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

interface AppRouteObject extends RouteObject {
  path: string;
  element: React.ReactNode;
}

export const nonTypedAppRoutes = {
  main: { path: "/", element: <HomePageLazy /> },
  about: { path: "/about", element: <AboutPageLazy /> },
};

export const appRoutes: Record<keyof typeof nonTypedAppRoutes, AppRouteObject> =
  nonTypedAppRoutes;
