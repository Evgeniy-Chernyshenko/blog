import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPage.module.scss";
import { fetchNextPageArticles } from "../../model/services/fetchNextPageArticles/fetchNextPageArticles";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { PageWrapper } from "@/widgets/PageWrapper";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { articlesPage: articlesPageReducer };

function ArticlesPage() {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const handleScrollEnd = useCallback(
    () => dispatch(fetchNextPageArticles()),
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} notRemoveOnUnmount>
      <PageWrapper onScrollEnd={handleScrollEnd}>
        <div className={cx("ArticlesPage")}>
          <ArticlesPageFilters />

          <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
}

export default ArticlesPage;
