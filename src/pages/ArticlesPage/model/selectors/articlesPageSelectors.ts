import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleSortField } from "@/entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading ?? false;

export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view ?? "grid";

export const getArticlesPagePage = (state: StateSchema) =>
  state.articlesPage?.page ?? 1;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const getArticlesPageInited = (state: StateSchema) =>
  state.articlesPage?._inited;

export const getArticlesPageSortField = (state: StateSchema) =>
  state.articlesPage?.sortField ?? ArticleSortField.CREATED_AT;

export const getArticlesPageSortDirection = (state: StateSchema) =>
  state.articlesPage?.sortDirection ?? "desc";

export const getArticlesPageSearch = (state: StateSchema) =>
  state.articlesPage?.search ?? "";

export const getArticlesPageTag = (state: StateSchema) =>
  state.articlesPage?.tag ?? "all";
