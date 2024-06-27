import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  void,
  ThunkConfig<string>
>("api/fetchArticles", async (_, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<ArticleType[]>("/articles", {
      params: { _expand: "user" },
    });

    return data;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
