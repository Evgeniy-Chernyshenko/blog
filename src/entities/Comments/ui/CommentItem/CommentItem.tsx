import { memo } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { routePaths } from "@/shared/constants/appRoutes";

const cx = classNamesBind(s);

interface CommentItemProps {
  data?: Comment;
  isLoading?: boolean;
  className?: string;
}

export const CommentItem = memo(function CommentItem({
  data,
  isLoading = false,
  className,
}: CommentItemProps) {
  return (
    <div className={cx("CommentItem", { loading: isLoading }, [className])}>
      {isLoading && (
        <>
          <div className={cx("header", [className])}>
            <Skeleton width={30} height={30} borderRadius="50%" />

            <Skeleton width={200} height={16} />
          </div>

          <Skeleton width="100%" height={100} />
        </>
      )}

      {data && (
        <>
          <AppLink
            className={cx("header", [className])}
            to={`${routePaths.PROFILE}${data.user.id}`}
          >
            {data.user.avatar && (
              <Avatar
                src={data.user.avatar}
                alt={data.user.username}
                size={30}
              />
            )}

            <TextBlock text={data.user.username} />
          </AppLink>

          <TextBlock text={data.text} />
        </>
      )}
    </div>
  );
});
