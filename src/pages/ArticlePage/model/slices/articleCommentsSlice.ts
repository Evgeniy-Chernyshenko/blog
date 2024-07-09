import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Comment } from "@/entities/Comments";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleCommentsSchema } from "../types/articleCommentsSchema";
import { fetchComments } from "../services/fetchComments/fetchComments";

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

const initialState =
  articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  });

export const getArticleComments =
  articleCommentsAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage?.comments ?? initialState,
  );

const articleCommentsSlice = createSlice({
  name: "articleComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });

    builder.addCase(fetchComments.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    });

    builder.addCase(fetchComments.fulfilled, (state, action) => {
      articleCommentsAdapter.setAll(state, action.payload);
      state.isLoading = false;
    });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
