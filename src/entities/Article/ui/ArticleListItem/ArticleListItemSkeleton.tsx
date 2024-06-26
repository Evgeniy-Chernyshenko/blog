import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleListItem.module.scss";
import { ArticleView } from "../../model/types/article";
import { Card } from "@/shared/ui/Card/Card";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

const cx = classNamesBind(s);

interface ArticleListItemSkeletonProps {
  view?: ArticleView;
  className?: string;
}

export const ArticleListItemSkeleton = memo(function ArticleListItemSkeleton({
  view = "grid",
  className,
}: ArticleListItemSkeletonProps) {
  if (view === "grid") {
    return (
      <Card className={cx("ArticleListItem", [className, view])}>
        <Skeleton className={cx("image")} />
        <Skeleton height={16} />
        <Skeleton height={16} />
      </Card>
    );
  }

  return (
    <Card className={cx("ArticleListItem", [className, view])}>
      <div className={cx("header")}>
        <div className={cx("user")}>
          <Skeleton height={30} width={30} borderRadius="50%" />

          <Skeleton height={16} width={100} />
        </div>

        <Skeleton height={16} width={80} />
      </div>

      <Skeleton height={32} width={300} />

      <Skeleton height={16} width={400} />

      <Skeleton className={cx("image")} />

      <Skeleton height={16} />

      <Skeleton height={16} />
    </Card>
  );
});
