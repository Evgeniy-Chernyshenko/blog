import { RouteObject } from "react-router-dom";
import { ReactElement } from "react";
import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";
import { ArticlesPageLazy } from "@/pages/ArticlesPage";
import { ArticlePageLazy } from "@/pages/ArticlePage";

export interface AppRouteObject extends RouteObject {
  path: string;
  element: ReactElement;
  authOnly?: boolean;
}

export const nonTypedAppRoutes = {
  main: { path: "/", element: <HomePageLazy /> },
  about: { path: "/about", element: <AboutPageLazy /> },
  profile: { path: "/profile", element: <ProfilePageLazy />, authOnly: true },
  articles: {
    path: "/articles",
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  article: {
    path: "/articles/:id",
    element: <ArticlePageLazy />,
    authOnly: true,
  },
  notFound: { path: "*", element: <NotFoundPage /> },
};

export const appRoutes: Record<keyof typeof nonTypedAppRoutes, AppRouteObject> =
  nonTypedAppRoutes;
