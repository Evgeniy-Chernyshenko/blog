import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();

  return (
    <h1>
      {t("ArticlePage")} {id}
    </h1>
  );
}

export default ArticlePage;
