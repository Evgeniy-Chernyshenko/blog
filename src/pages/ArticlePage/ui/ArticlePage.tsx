import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { Article } from "@/entities/Article";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";
import s from "./ArticlePage.module.scss";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import { CommentList } from "@/entities/Comments";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  articleCommentsReducer,
  getArticleComments,
} from "../model/slice/articleCommentsSlice";
import { getArticleCommentsIsLoading } from "../model/selectors/articleComments";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchComments } from "../services/fetchComments/fetchComments";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { addComment } from "../services/addComment/addComment";
import { AddCommentFormLazy } from "@/features/AddCommentForm";
import { Button } from "@/shared/ui/Button/Button";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";

const cx = classNamesBind(s);

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

function ArticlePage() {
  const { t } = useTranslation("article");
  const { id: articleId } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackToArticlesClick = useCallback(() => {
    navigate(appRoutes.articles.path);
  }, [navigate]);

  useInitialEffect(() => {
    if (!articleId) {
      return;
    }

    dispatch(fetchComments(articleId));
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
      <div className={cx("ArticlePage")}>
        <div>
          <Button onClick={handleBackToArticlesClick}>
            {t("К списку статей")}
          </Button>
        </div>

        <Article id={articleId} />

        <TextBlock title={t("Комментарии")} />

        <AddCommentFormLazy onSubmit={handleSubmitComment} />

        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
}

export default ArticlePage;
