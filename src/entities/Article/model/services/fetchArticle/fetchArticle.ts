import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleType } from "../../types/article";

export const fetchArticle = createAsyncThunk<
  ArticleType,
  string,
  ThunkConfig<string>
>("api/fetchArticle", async (articleId, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<ArticleType>(`/articles/${articleId}`);

    return data;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
