import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slice/articlesPageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "@/shared/constants/localStorage";
import { ArticleView } from "@/entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, { getState, dispatch }) => {
  const _inited = getArticlesPageInited(getState());

  if (_inited) {
    return;
  }

  const view = localStorage.getItem(
    LOCALSTORAGE_ARTICLES_VIEW_KEY,
  ) as ArticleView;

  dispatch(articlesPageActions.initState({ view }));

  dispatch(fetchArticles());
});
