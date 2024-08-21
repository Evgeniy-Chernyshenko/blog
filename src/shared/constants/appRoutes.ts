export const appRoutes = {
  getMainRoute: () => "/",
  getAboutRoute: () => "/about",
  getProfileRoute: (id: string) => `/profile/${id}`,
  getArticlesRoute: () => "articles/",
  getArticleRoute: (id: string) => `articles/${id}`,
  getArticleEditRoute: (id: string) => `/articles/${id}/edit`,
  getArticleCreateRoute: () => "/articles/new",
  getAdminRoute: () => "/admin",
  getForbiddenRoute: () => "/forbidden",
  getNotFoundRoute: () => "*",
};
