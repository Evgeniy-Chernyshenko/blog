import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "@/shared/constants/localStorage";
import { ArticleSortField, ArticleTag, ArticleView } from "@/entities/Article";
import { SortDirection } from "@/shared/types/sort";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams | void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", (searchParams, { getState, dispatch }) => {
  const _inited = getArticlesPageInited(getState());

  if (_inited) {
    return;
  }

  const view = localStorage.getItem(
    LOCALSTORAGE_ARTICLES_VIEW_KEY,
  ) as ArticleView;

  const searchFromUrl = searchParams?.get("search");
  const sortFieldFromUrl = searchParams?.get("sort") as ArticleSortField | null;
  const sortDirectionFromUrl = searchParams?.get(
    "order",
  ) as SortDirection | null;
  const tagFromUrl = searchParams?.get("tag") as ArticleTag | null;

  dispatch(
    articlesPageActions.initState({
      view,
      ...(searchFromUrl && { search: searchFromUrl }),
      ...(sortFieldFromUrl && {
        sortField: sortFieldFromUrl,
      }),
      ...(sortDirectionFromUrl && {
        sortDirection: sortDirectionFromUrl,
      }),
      ...(tagFromUrl && {
        tag: tagFromUrl,
      }),
    }),
  );

  dispatch(fetchArticles());
});
