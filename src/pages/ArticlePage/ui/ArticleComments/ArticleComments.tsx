import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import { AddCommentFormLazy } from "@/features/AddCommentForm";
import { CommentList } from "@/entities/Comments";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { addComment } from "../../model/services/addComment/addComment";
import { fetchComments } from "../../model/services/fetchComments/fetchComments";
import { getArticleComments } from "../../model/slices/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/articleComments";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";

interface ArticleCommentsProps {
  id: string;
}

export const ArticleComments = memo(function ArticleComments({
  id,
}: ArticleCommentsProps) {
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useInitialEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchComments(id));
  });

  const handleSubmitComment = useCallback(
    async (text: string) => {
      if (!id) {
        return;
      }

      const result = await dispatch(addComment(text));

      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchComments(id));
      }
    },
    [dispatch, id],
  );

  return (
    <VStack gap={16}>
      <TextBlock title={t("Комментарии")} />

      <AddCommentFormLazy onSubmit={handleSubmitComment} />

      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  );
});
