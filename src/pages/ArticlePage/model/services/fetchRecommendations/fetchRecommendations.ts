import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";

interface FetchRecommendationsArgs {
  count?: number;
}

export const fetchRecommendations = createAsyncThunk<
  ArticleType[],
  FetchRecommendationsArgs | undefined,
  ThunkConfig<string>
>(
  "api/fetchRecommendations",
  async ({ count = 5 } = {}, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<ArticleType[]>("/articles", {
        params: {
          _limit: count,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue("Что-то пошло не так");
    }
  },
);
