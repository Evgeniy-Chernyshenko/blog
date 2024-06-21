import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Article } from "@/entities/Article";
import { TextBlock } from "@/shared/ui/TextBlock/TextBlock";

function ArticlePage() {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();

  return id ? (
    <Article id={id} />
  ) : (
    <TextBlock theme="error" align="center" title={t("Статья не найдена")} />
  );
}

export default ArticlePage;
