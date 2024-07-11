import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { Article, ArticleList } from "@/entities/Article";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import s from "./ArticlePage.module.scss";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { CommentList } from "@/entities/Comments";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/articleComments";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchComments } from "../../model/services/fetchComments/fetchComments";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { addComment } from "../../model/services/addComment/addComment";
import { AddCommentFormLazy } from "@/features/AddCommentForm";
import { PageWrapper } from "@/widgets/PageWrapper";
import { getArticleRecommendations } from "../../model/slices/articleRecommendationsSlice";
import { fetchRecommendations } from "../../model/services/fetchRecommendations/fetchRecommendations";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "../../model/selectors/articleRecommendations";
import { articlePageReducer } from "../../model/slices";
import { ArticlePageHeader } from "../ArticlePageHeader/ArticlePageHeader";

const cx = classNamesBind(s);

const initialReducers: ReducersList = {
  articlePage: articlePageReducer,
};

function ArticlePage() {
  const { t } = useTranslation("article");
  const { id: articleId } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const articleRecommendations = useSelector(
    getArticleRecommendations.selectAll,
  );
  const articleRecommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading,
  );
  const articleRecommendationsError = useSelector(
    getArticleRecommendationsError,
  );

  useInitialEffect(() => {
    if (!articleId) {
      return;
    }

    dispatch(fetchComments(articleId));
    dispatch(fetchRecommendations());
  });

  const handleSubmitComment = useCallback(
    async (text: string) => {
      if (!articleId) {
        return;
      }

      const result = await dispatch(addComment(text));

      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchComments(articleId));
      }
    },
    [dispatch, articleId],
  );

  if (!articleId) {
    return (
      <TextBlock theme="error" align="center" title={t("Статья не найдена")} />
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <PageWrapper>
        <div className={cx("ArticlePage")}>
          <ArticlePageHeader />

          <Article id={articleId} />

          {(articleRecommendationsIsLoading ||
            articleRecommendations.length > 0) && (
            <>
              <TextBlock title={t("Рекоммендации")} />
              <ArticleList
                className={cx("recommendations")}
                articles={articleRecommendations}
                isLoading={articleRecommendationsIsLoading}
                target="_blank"
              />
            </>
          )}

          {articleRecommendationsError && (
            <TextBlock
              theme="error"
              title={t("Произошла ошибка при загрузке рекоммендаций")}
            />
          )}

          <TextBlock title={t("Комментарии")} />

          <AddCommentFormLazy onSubmit={handleSubmitComment} />

          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
}

export default ArticlePage;
