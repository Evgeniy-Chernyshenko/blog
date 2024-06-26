import { useTranslation } from "react-i18next";
import { ArticleList } from "@/entities/Article/ui/ArticleList/ArticleList";

function ArticlesPage() {
  const { t } = useTranslation("articles");

  return (
    <>
      <h1>{t("ArticlesPage")}</h1>

      <ArticleList view="list" articles={[]} />
    </>
  );
}

export default ArticlesPage;
