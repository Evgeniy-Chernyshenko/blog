import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Article } from "@/entities/Article";
import { TextBlock } from "@/shared/ui/TextBlock";
import s from "./ArticlePage.module.scss";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { PageWrapper } from "@/widgets/PageWrapper";
import { articlePageReducer } from "../../model/slices";
import { ArticlePageHeader } from "../ArticlePageHeader/ArticlePageHeader";
import { ArticleRecommendationsList } from "@/features/Temp";
import { ArticleComments } from "../ArticleComments/ArticleComments";
import { ArticleRatingLazy } from "@/features/ArticleRating";

const cx = classNamesBind(s);

const initialReducers: ReducersList = {
  articlePage: articlePageReducer,
};

function ArticlePage() {
  const { t } = useTranslation("article");
  const { id: articleId } = useParams<{ id: string }>();

  if (!articleId) {
    return (
      <TextBlock theme="error" align="center" title={t("Статья не найдена")} />
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <PageWrapper dataTestid="ArticlePage">
        <div className={cx("ArticlePage")}>
          <ArticlePageHeader />

          <Article id={articleId} />

          <ArticleRecommendationsList />

          <ArticleRatingLazy articleId={articleId} />

          <ArticleComments id={articleId} />
        </div>
      </PageWrapper>
    </DynamicModuleLoader>
  );
}

export default ArticlePage;
