import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPage.module.scss";
import { fetchNextPageArticles } from "../../model/services/fetchNextPageArticles/fetchNextPageArticles";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { PageWrapper } from "@/widgets/PageWrapper";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

const cx = classNamesBind(s);

const initialReducers: ReducersList = { articlesPage: articlesPageReducer };

function ArticlesPage() {
  const dispatch = useAppDispatch();
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

          <ArticleInfiniteList />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
}

export default ArticlesPage;
