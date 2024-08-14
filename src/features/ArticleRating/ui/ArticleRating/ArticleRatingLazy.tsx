import { FC, lazy, Suspense } from "react";
import { ArticleRatingProps } from "./ArticleRating";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const Component = lazy<FC<ArticleRatingProps>>(() => import("./ArticleRating"));

export const ArticleRatingLazy: FC<ArticleRatingProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton height={105} />}>
      <Component {...props} />
    </Suspense>
  );
};
