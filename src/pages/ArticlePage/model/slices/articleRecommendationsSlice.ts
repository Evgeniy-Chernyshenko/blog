import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";
import { ArticleRecommendationsSchema } from "../types/ArticleRecommendationsSchema";
import { fetchRecommendations } from "../services/fetchRecommendations/fetchRecommendations";

const articleRecommendationsAdapter = createEntityAdapter<ArticleType>({
  selectId: (comment) => comment.id,
});

const initialState =
  articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  });

export const getArticleRecommendations =
  articleRecommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage?.recommendations ?? initialState,
  );

const articleRecommendationsSlice = createSlice({
  name: "articleRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendations.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });

    builder.addCase(fetchRecommendations.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    });

    builder.addCase(fetchRecommendations.fulfilled, (state, action) => {
      articleRecommendationsAdapter.setAll(state, action.payload);
      state.isLoading = false;
    });
  },
});

export const { reducer: articleRecommendationsReducer } =
  articleRecommendationsSlice;
