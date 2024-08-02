import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "@/entities/Article";
import { getArticles } from "../../model/slice/articlesPageSlice";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(function ArticleInfiniteList({
  className,
}: ArticleInfiniteListProps) {
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      error={error}
      className={className}
      virtualized
    />
  );
});
