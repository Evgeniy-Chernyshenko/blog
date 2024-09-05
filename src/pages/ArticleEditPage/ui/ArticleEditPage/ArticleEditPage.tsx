import { useParams } from "react-router-dom";
import { PageWrapper } from "@/widgets/PageWrapper";

function ArticleEditPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <PageWrapper dataTestid="ArticleEditPage">
      {isEdit ? `Редактирование ${id}` : "Создание"}
    </PageWrapper>
  );
}

export default ArticleEditPage;
