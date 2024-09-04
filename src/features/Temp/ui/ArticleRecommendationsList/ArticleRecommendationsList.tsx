import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleRecommendationsList.module.scss";
import { TextBlock } from "@/shared/ui/TextBlock";
import { ArticleList } from "@/entities/Article";
import { VStack } from "@/shared/ui/Stack";
import { useGetArticleRecommendationsListQuery } from "../../api/articleRecommendationsApi";

const cx = classNamesBind(s);

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  function ArticleRecommendationsList({
    className,
  }: ArticleRecommendationsListProps) {
    const { t } = useTranslation("article");
    const { isLoading, data, error } = useGetArticleRecommendationsListQuery(3);

    if (error) {
      return (
        <TextBlock
          theme="error"
          title={t("Произошла ошибка при загрузке рекоммендаций")}
        />
      );
    }

    return (
      <VStack className={cx("", [className])}>
        <TextBlock title={t("Рекоммендации")} />

        <ArticleList
          className={cx("recommendations")}
          articles={data ?? []}
          target="_blank"
          isLoading={isLoading}
        />
      </VStack>
    );
  },
);
