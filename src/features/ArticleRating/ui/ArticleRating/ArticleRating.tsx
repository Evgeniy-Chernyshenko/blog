import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RatingCard } from "@/entities/Rating";
import {
  useGetArticleRatingQuery,
  useSetArticleRatingMutation,
} from "../../api/articleRatingApi";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

const ArticleRating = memo(function ArticleRating({
  articleId,
  className,
}: ArticleRatingProps) {
  const { t } = useTranslation();
  const userAuthData = useSelector(getUserAuthData);
  const { isLoading, data } = useGetArticleRatingQuery({
    articleId,
    userId: userAuthData?.id ?? "",
  });
  const [
    setArticleRating,
    { data: setArticleRatingData, isLoading: isLoadingSetArticleRating },
  ] = useSetArticleRatingMutation();

  const handleEvaluation = useCallback(
    (rating: number, feedback?: string) => {
      setArticleRating({
        articleId,
        userId: userAuthData?.id ?? "",
        rating,
        feedback,
      });
    },
    [articleId, setArticleRating, userAuthData?.id],
  );

  if (isLoading) {
    return <Skeleton height={105} />;
  }

  const rating = setArticleRatingData?.rating || data?.[0]?.rating;

  return (
    <RatingCard
      className={className}
      title={rating ? t("Вы оценили статью") : t("Оцените статью")}
      feedbackTitle={t("Ваша оценка очень важна, это поможет стать нам лучше")}
      onEvaluaiton={handleEvaluation}
      value={rating}
      disabled={Boolean(rating) || isLoadingSetArticleRating}
    />
  );
});

export default ArticleRating;
