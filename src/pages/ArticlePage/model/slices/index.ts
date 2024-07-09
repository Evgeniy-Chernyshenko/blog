import { combineReducers } from "@reduxjs/toolkit";
import { ArticlePageSchema } from "../types";
import { articleCommentsReducer } from "./articleCommentsSlice";
import { articleRecommendationsReducer } from "./articleRecommendationsSlice";

export const articlePageReducer = combineReducers<ArticlePageSchema>({
  comments: articleCommentsReducer,
  recommendations: articleRecommendationsReducer,
});
