import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";

interface AppRouteObject extends RouteObject {
  path: string;
  element: ReactNode;
  authOnly?: boolean;
}

export const nonTypedAppRoutes = {
  main: { path: "/", element: <HomePageLazy /> },
  about: { path: "/about", element: <AboutPageLazy /> },
  profile: { path: "/profile", element: <ProfilePageLazy />, authOnly: true },
  notFound: { path: "*", element: <NotFoundPage /> },
};

export const appRoutes: Record<keyof typeof nonTypedAppRoutes, AppRouteObject> =
  nonTypedAppRoutes;
