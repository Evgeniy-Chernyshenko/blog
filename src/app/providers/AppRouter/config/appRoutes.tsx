import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";

interface AppRouteObject extends RouteObject {
  path: string;
  element: ReactNode;
}

export const nonTypedAppRoutes = {
  main: { path: "/", element: <HomePageLazy /> },
  about: { path: "/about", element: <AboutPageLazy /> },
};

export const appRoutes: Record<keyof typeof nonTypedAppRoutes, AppRouteObject> =
  nonTypedAppRoutes;
