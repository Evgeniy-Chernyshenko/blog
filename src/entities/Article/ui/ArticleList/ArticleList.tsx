import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleList.module.scss";
import { ArticleType, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

const cx = classNamesBind(s);

interface ArticleListProps {
  articles: ArticleType[];
  view?: ArticleView;
  className?: string;
  isLoading?: boolean;
}

export const ArticleList = memo(function ArticleList({
  articles,
  view = "grid",
  className,
  isLoading = false,
}: ArticleListProps) {
  const renderArticle = (article: ArticleType) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  return (
    <div className={cx("ArticleList", [className, view])}>
      {isLoading &&
        [...Array(view === "grid" ? 9 : 3)].map((_, index) => (
          <ArticleListItemSkeleton key={index} view={view} />
        ))}
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
