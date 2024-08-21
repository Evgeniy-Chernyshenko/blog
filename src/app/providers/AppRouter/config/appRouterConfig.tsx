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
import { appRoutes } from "@/shared/constants/appRoutes";

export const appRouterConfig: AppRouteObject[] = [
  {
    path: appRoutes.getMainRoute(),
    element: <HomePageLazy />,
  },
  {
    path: appRoutes.getAboutRoute(),
    element: <AboutPageLazy />,
  },
  {
    path: appRoutes.getProfileRoute(":id"),
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  {
    path: appRoutes.getArticlesRoute(),
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  {
    path: appRoutes.getArticleRoute(":id"),
    element: <ArticlePageLazy />,
    authOnly: true,
  },
  {
    path: appRoutes.getArticleEditRoute(":id"),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  {
    path: appRoutes.getArticleCreateRoute(),
    element: <ArticleEditPageLazy />,
    authOnly: true,
  },
  {
    path: appRoutes.getAdminRoute(),
    element: <AdminPanelPageLazy />,
    authOnly: true,
    roles: ["admin", "manager"],
  },
  {
    path: appRoutes.getForbiddenRoute(),
    element: <ForbiddenPageLazy />,
  },
  {
    path: appRoutes.getNotFoundRoute(),
    element: <NotFoundPage />,
  },
];
