import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleList.module.scss";
import { ArticleType, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";

const cx = classNamesBind(s);

interface ArticleListProps {
  articles: ArticleType[];
  view?: ArticleView;
  className?: string;
  isLoading?: boolean;
  error?: string;
}

export const ArticleList = memo(function ArticleList({
  articles,
  view = "grid",
  className,
  isLoading = false,
  error,
}: ArticleListProps) {
  const { t } = useTranslation("articles");

  const renderArticle = (article: ArticleType) => {
    return <ArticleListItem key={article.id} article={article} view={view} />;
  };

  if (error) {
    return (
      <TextBlock
        theme="error"
        title={t("Произошка ошибка при загрузке статей")}
      />
    );
  }

  return (
    <div className={cx("ArticleList", [className, view])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}

      {isLoading &&
        [...Array(view === "grid" ? 9 : 3)].map((_, index) => (
          <ArticleListItemSkeleton key={index} view={view} />
        ))}
    </div>
  );
});
