import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlesSortSelectors.module.scss";
import { Select, SelectOption } from "@/shared/ui/Select/Select";
import { ArticleSortField } from "@/entities/Article";
import { SortDirection } from "@/shared/types";

const cx = classNamesBind(s);

interface ArticlesSortSelectorsProps {
  sortField: ArticleSortField;
  sortDirection: SortDirection;
  onChangeSortField: (sortField: ArticleSortField) => void;
  onChangeSortDirection: (sortDirection: SortDirection) => void;
  className?: string;
}

export const ArticlesSortSelectors = memo(function ArticlesSortSelectors({
  sortField,
  sortDirection,
  onChangeSortField,
  onChangeSortDirection,
  className,
}: ArticlesSortSelectorsProps) {
  const { t } = useTranslation("articles");

  const sortFieldOptions: SelectOption<ArticleSortField>[] = useMemo(
    () => [
      { text: t("дате создания"), value: ArticleSortField.CREATED_AT },
      { text: t("просмотрам"), value: ArticleSortField.VIEWS },
      { text: t("заголовку"), value: ArticleSortField.TITLE },
    ],
    [t],
  );

  const sortDirectionOptions: SelectOption<SortDirection>[] = useMemo(
    () => [
      { text: t("убыванию"), value: "desc" },
      { text: t("возрастанию"), value: "asc" },
    ],
    [t],
  );

  return (
    <div className={cx("ArticlesSortSelectors", [className])}>
      <Select
        label={t("Сортировать по")}
        options={sortFieldOptions}
        onChange={onChangeSortField}
        value={sortField}
      />

      <Select
        label={t("Порядок сортировки")}
        options={sortDirectionOptions}
        onChange={onChangeSortDirection}
        value={sortDirection}
      />
    </div>
  );
});
