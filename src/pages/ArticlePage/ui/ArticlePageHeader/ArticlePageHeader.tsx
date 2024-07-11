import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticlePageHeader.module.scss";
import { appRoutes } from "@/app/providers/AppRouter/config/appRoutes";
import { Button } from "@/shared/ui/Button/Button";
import { getCanEdit } from "../../model/selectors/article";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getArticleData } from "@/entities/Article";

const cx = classNamesBind(s);

interface ArticlePageHeaderProps {
  className?: string;
}

export const ArticlePageHeader = memo(function ArticlePageHeader({
  className,
}: ArticlePageHeaderProps) {
  const navigate = useNavigate();
  const { t } = useTranslation("article");
  const canEdit = useSelector(getCanEdit);
  const articleData = useSelector(getArticleData);

  const handleBackToArticlesClick = useCallback(() => {
    navigate(appRoutes.articles.path);
  }, [navigate]);

  return (
    <div className={cx("ArticlePageHeader", [className])}>
      <Button onClick={handleBackToArticlesClick}>
        {t("К списку статей")}
      </Button>

      {canEdit && articleData?.id && (
        <AppLink
          to={`${appRoutes.editArticle.pathWithoutParams}/${articleData.id}/edit`}
        >
          <Button>{t("Редактировать")}</Button>
        </AppLink>
      )}
    </div>
  );
});
