import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articlePage?.comments.isLoading ?? true;

export const getArticleCommentsError = (state: StateSchema) =>
  state.articlePage?.comments.error;
