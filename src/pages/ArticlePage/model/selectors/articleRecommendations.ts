import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articlePage?.recommendations.isLoading ?? true;

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articlePage?.recommendations.error;
