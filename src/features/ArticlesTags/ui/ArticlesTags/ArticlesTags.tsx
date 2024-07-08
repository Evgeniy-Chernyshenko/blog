import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TabItem, Tabs } from "@/shared/ui/Tabs/Tabs";
import { ArticleTag } from "@/entities/Article";

interface ArticlesTagsProps {
  tag: ArticleTag;
  onChange: (tag: ArticleTag) => void;
  className?: string;
}

export const ArticlesTags = memo(function ArticlesTags({
  tag,
  onChange,
  className,
}: ArticlesTagsProps) {
  const { t } = useTranslation("articles");

  const tags = useMemo<TabItem<ArticleTag>[]>(
    () => [
      { value: "all", text: t("Все статьи") },
      { value: "it", text: t("IT") },
      { value: "economics", text: t("Экономика") },
      { value: "science", text: t("Наука") },
    ],
    [t],
  );

  return (
    <Tabs
      className={className}
      tabItems={tags}
      value={tag}
      onChange={onChange}
    />
  );
});
