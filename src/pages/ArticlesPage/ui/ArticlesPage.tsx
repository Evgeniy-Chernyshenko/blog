import { useTranslation } from "react-i18next";

function ArticlesPage() {
  const { t } = useTranslation("articles");

  return <h1>{t("ArticlesPage")}</h1>;
}

export default ArticlesPage;
