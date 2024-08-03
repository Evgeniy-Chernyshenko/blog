import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesPageFilters.module.scss";
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from "@/shared/constants/localStorage";
import { articlesPageActions } from "../../model/slice/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ArticlesViewSelector } from "@/features/ArticlesViewSelector/ui/ArticlesViewSelector";
import {
  getArticlesPageSearch,
  getArticlesPageSortDirection,
  getArticlesPageSortField,
  getArticlesPageTag,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { Card } from "@/shared/ui/Card/Card";
import { Input } from "@/shared/ui/Input/Input";
import { ArticlesSortSelectors } from "@/features/ArticlesSortSelectors";
import { SortDirection } from "@/shared/types";
import { ArticleSortField, ArticleTag, ArticleView } from "@/entities/Article";
import { fetchArticles } from "../../model/services/fetchArticles/fetchArticles";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { ArticlesTags } from "@/features/ArticlesTags";

const cx = classNamesBind(s);

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(function ArticlesPageFilter({
  className,
}: ArticlesPageFiltersProps) {
  const view = useSelector(getArticlesPageView);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("articles");
  const sortField = useSelector(getArticlesPageSortField);
  const sortDirection = useSelector(getArticlesPageSortDirection);
  const search = useSelector(getArticlesPageSearch);
  const tag = useSelector(getArticlesPageTag);

  const fetchData = useCallback(() => {
    dispatch(fetchArticles({ replace: true }));
  }, [dispatch]);
  const debouncedFetchData = useDebounce(fetchData);

  const handleChangeView = useCallback(
    (view: ArticleView) => {
      localStorage.setItem(LOCALSTORAGE_ARTICLES_VIEW_KEY, view);

      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const handleChangeSortField = useCallback(
    (sortField: ArticleSortField) => {
      dispatch(articlesPageActions.setSortField(sortField));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleChangeSortDirection = useCallback(
    (sortDirection: SortDirection) => {
      dispatch(articlesPageActions.setSortDirection(sortDirection));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const handleChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const handleChangeTag = useCallback(
    (tag: ArticleTag) => {
      dispatch(articlesPageActions.setTag(tag));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={cx("ArticlesPageFilters", [className])}>
      <div className={cx("selectors")}>
        <ArticlesSortSelectors
          sortDirection={sortDirection}
          sortField={sortField}
          onChangeSortDirection={handleChangeSortDirection}
          onChangeSortField={handleChangeSortField}
        />

        <ArticlesViewSelector onChange={handleChangeView} view={view} />
      </div>

      <Card>
        <Input
          value={search}
          onChange={handleChangeSearch}
          placeholder={t("Поиск")}
        />
      </Card>

      <ArticlesTags tag={tag} onChange={handleChangeTag} />
    </div>
  );
});
