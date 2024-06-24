import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentItem } from "../CommentItem/CommentItem";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";

const cx = classNamesBind(s);

interface CommentListProps {
  comments: Comment[];
  isLoading?: boolean;
  className?: string;
}

export const CommentList = memo(function CommentList({
  comments,
  isLoading = false,
  className,
}: CommentListProps) {
  const { t } = useTranslation("article");

  return (
    <div className={cx("CommentList", [className])}>
      {isLoading &&
        [...Array(10)].map((_, index) => <CommentItem key={index} isLoading />)}

      {Boolean(comments.length) &&
        comments.map((comment) => (
          <CommentItem key={comment.id} data={comment} />
        ))}

      {!isLoading && !comments.length && (
        <TextBlock text={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
});
