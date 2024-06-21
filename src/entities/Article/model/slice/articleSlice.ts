import { createSlice } from "@reduxjs/toolkit";
import { fetchArticle } from "../services/fetchArticle/fetchArticle";
import { ArticleSchema } from "../types/articleSchema";

const initialState: ArticleSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(fetchArticle.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export const { actions: articleActions, reducer: articleReducer } =
  articleSlice;
