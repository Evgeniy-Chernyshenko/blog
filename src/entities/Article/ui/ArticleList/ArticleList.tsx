import { HTMLAttributeAnchorTarget, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleList.module.scss";
import { ArticleType, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { PAGE_WRAPPER_ID } from "@/widgets/PageWrapper/ui/PageWrapper/PageWrapper";

const cx = classNamesBind(s);

interface ArticleListProps {
  articles: ArticleType[];
  view?: ArticleView;
  className?: string;
  isLoading?: boolean;
  error?: string;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

export const ArticleList = memo(function ArticleList({
  articles,
  view = "grid",
  className,
  isLoading = false,
  error,
  target,
  virtualized = false,
}: ArticleListProps) {
  const { t } = useTranslation("articles");

  const isBig = view === "list";
  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowRenderer = useCallback(
    ({ index, style, key }: ListRowProps) => {
      const fromIndex = index * itemsPerRow;
      const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

      const slicedArticles = articles.slice(fromIndex, toIndex);

      return (
        <div key={key} style={style} className={cx("row", [view])}>
          {slicedArticles.map((article) => (
            <ArticleListItem
              key={article.id}
              article={article}
              view={view}
              target={target}
            />
          ))}
        </div>
      );
    },
    [articles, itemsPerRow, target, view],
  );

  if (error) {
    return (
      <TextBlock
        theme="error"
        title={t("Произошка ошибка при загрузке статей")}
      />
    );
  }

  if (!isLoading && articles.length === 0) {
    return (
      <div className={cx("ArticleList", [className, view])}>
        <TextBlock title={t("Нет статей")} size="l" />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_WRAPPER_ID) ?? undefined}
    >
      {({
        width,
        height,
        scrollTop,
        onChildScroll,
        isScrolling,
        registerChild,
      }) => {
        return (
          <div ref={registerChild} className={cx("ArticleList", [className])}>
            {virtualized ? (
              <List
                width={width ? width - 40 - 12 : 700}
                height={height || 700}
                rowHeight={isBig ? 593.6 : 368}
                rowCount={rowCount}
                rowRenderer={rowRenderer}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            ) : (
              <div className={cx("row", [view])}>
                {articles.map((article) => (
                  <ArticleListItem
                    article={article}
                    view={view}
                    target={target}
                    key={article.id}
                  />
                ))}
              </div>
            )}

            {isLoading && (
              <div className={cx("row", [view])}>
                {[...Array(view === "grid" ? 6 : 4)].map((_, index) => (
                  <ArticleListItemSkeleton key={index} view={view} />
                ))}
              </div>
            )}
          </div>
        );
      }}
    </WindowScroller>
  );
});
