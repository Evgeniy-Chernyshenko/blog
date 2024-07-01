import { useSelector } from "react-redux";
import { useCallback, useRef } from "react";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../model/slice/articlesPageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchArticles } from "../model/services/fetchArticles/fetchArticles";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../model/selectors/articlesPageSelectors";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPage.module.scss";
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector/ui/ArticlesViewSelector";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "@/shared/constants/localStorage";
import { ArticleView } from "@/entities/Article";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll";
import { fetchNextPageArticles } from "../model/services/fetchNextPageArticles/fetchNextPageArticles";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { articlesPage: articlesPageReducer };

function ArticlesPage() {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const endOfPageRef = useRef<HTMLElement>(null);

  useInfiniteScroll(endOfPageRef, () => dispatch(fetchNextPageArticles()));

  useInitialEffect(() => {
    const view = localStorage.getItem(
      LOCALSTORAGE_ARTICLES_VIEW_KEY,
    ) as ArticleView;

    dispatch(articlesPageActions.initState({ view }));

    dispatch(fetchArticles());
  });

  const handleChangeView = useCallback(
    (view) => {
      localStorage.setItem(LOCALSTORAGE_ARTICLES_VIEW_KEY, view);

      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cx("ArticlesPage")}>
        <ArticlesViewSelector onChange={handleChangeView} view={view} />

        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
          error={error}
        />
      </div>

      <span ref={endOfPageRef} />
    </DynamicModuleLoader>
  );
}

export default ArticlesPage;
