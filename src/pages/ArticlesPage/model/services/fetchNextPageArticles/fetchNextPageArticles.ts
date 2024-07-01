import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPagePage,
} from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";

export const fetchNextPageArticles = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("api/fetchNextPageArticles", async (_, { getState, dispatch }) => {
  const isLoading = getArticlesPageIsLoading(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const error = getArticlesPageError(getState());

  if (!hasMore || isLoading || error) {
    return;
  }

  const page = getArticlesPagePage(getState());

  const newPageNum = page + 1;

  dispatch(articlesPageActions.setPage(newPageNum));
  dispatch(fetchArticles({ page: newPageNum }));
});
