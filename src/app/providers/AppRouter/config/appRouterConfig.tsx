import { AboutPageLazy } from "@/pages/AboutPage";
import { HomePageLazy } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePageLazy } from "@/pages/ProfilePage";
import { ArticlesPageLazy } from "@/pages/ArticlesPage";
import { ArticlePageLazy } from "@/pages/ArticlePage";
import { ArticleEditPageLazy } from "@/pages/ArticleEditPage";
import { AdminPanelPageLazy } from "@/pages/AdminPanelPage";
import { ForbiddenPageLazy } from "@/pages/ForbiddenPage";
import { AppRouteObject } from "@/shared/types/router";
import { AppRoute, routePaths } from "@/shared/constants/appRoutes";

export const appRouterConfig: Record<AppRoute, AppRouteObject> = {
  [AppRoute.MAIN]: {
    path: routePaths.MAIN,
    element: <HomePageLazy />,
  },
  [AppRoute.ABOUT]: {
    path: routePaths.ABOUT,
    element: <AboutPageLazy />,
  },
  [AppRoute.PROFILE]: {
    path: `${routePaths.PROFILE}:id`,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoute.ARTICLES]: {
    path: routePaths.ARTICLES,
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoute.ARTICLE]: {
    path: `${routePaths.ARTICLE}:id`,
    element: <ArticlePageLazy />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_EDIT]: {
    path: routePaths.ARTICLE_EDIT,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoute.ARTICLE_CREATE]: {
    path: routePaths.ARTICLE_CREATE,
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  [AppRoute.ADMIN]: {
    path: routePaths.ADMIN,
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: ["admin", "manager"],
  },
  [AppRoute.FORBIDDEN]: {
    path: routePaths.FORBIDDEN,
    element: <ForbiddenPageLazy />,
  },
  [AppRoute.NOT_FOUND]: {
    path: routePaths.NOT_FOUND,
    element: <NotFoundPage />,
  },
};
