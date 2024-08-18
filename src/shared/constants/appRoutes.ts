export enum AppRoute {
  MAIN = "MAIN",
  ABOUT = "ABOUT",
  PROFILE = "PROFILE",
  ARTICLES = "ARTICLES",
  ARTICLE = "ARTICLE",
  ARTICLE_EDIT = "ARTICLE_EDIT",
  ARTICLE_CREATE = "ARTICLE_CREATE",
  ADMIN = "ADMIN",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
}

export const routePaths: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.PROFILE]: "/profile/", // + id
  [AppRoute.ARTICLES]: "/articles",
  [AppRoute.ARTICLE]: "/articles/", // + id
  [AppRoute.ARTICLE_EDIT]: "/articles/:id/edit",
  [AppRoute.ARTICLE_CREATE]: "/articles/new",
  [AppRoute.ADMIN]: "/admin",
  [AppRoute.FORBIDDEN]: "/forbidden",
  [AppRoute.NOT_FOUND]: "*",
};
