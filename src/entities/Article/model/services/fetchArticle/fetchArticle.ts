import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticle = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("api/fetchArticle", async (articleId, { extra, rejectWithValue }) => {
  try {
    const { data } = await extra.api.get<Article>(`/articles/${articleId}`);

    return data;
  } catch (error) {
    return rejectWithValue("Что-то пошло не так");
  }
});
