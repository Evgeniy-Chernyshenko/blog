import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";
import {
  getArticlesPageLimit,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSortDirection,
  getArticlesPageSortField,
  getArticlesPageTag,
} from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesArgs {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  FetchArticlesArgs | undefined,
  ThunkConfig<string>
>("api/fetchArticles", async (_, { extra, rejectWithValue, getState }) => {
  try {
    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPagePage(getState());
    const sortField = getArticlesPageSortField(getState());
    const sortDirection = getArticlesPageSortDirection(getState());
    const search = getArticlesPageSearch(getState());
    const tag = getArticlesPageTag(getState());

    addQueryParams({ sort: sortField, order: sortDirection, search, tag });

    const { data } = await extra.api.get<ArticleType[]>("/articles", {
      params: {
        _expand: "user",
        _page: page,
        _limit: limit,
        _sort: sortField,
        _order: sortDirection,
        q: search,
        type: tag === "all" ? undefined : tag,
      },
    });

    return data;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
