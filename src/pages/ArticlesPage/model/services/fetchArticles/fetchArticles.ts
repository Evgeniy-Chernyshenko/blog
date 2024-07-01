import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface FetchArticlesArgs {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  FetchArticlesArgs | undefined,
  ThunkConfig<string>
>(
  "api/fetchArticles",
  async ({ page = 1 } = {}, { extra, rejectWithValue, getState }) => {
    try {
      const limit = getArticlesPageLimit(getState());

      const { data } = await extra.api.get<ArticleType[]>("/articles", {
        params: { _expand: "user", _page: page, _limit: limit },
      });

      return data;
    } catch (error) {
      return rejectWithValue("Что-то пошло не так");
    }
  },
);
