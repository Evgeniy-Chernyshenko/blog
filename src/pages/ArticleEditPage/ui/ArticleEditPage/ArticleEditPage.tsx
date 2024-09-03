import { useParams } from "react-router-dom";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./ArticleEditPage.module.scss";
import { PageWrapper } from "@/widgets/PageWrapper";

const cx = classNamesBind(s);

function ArticleEditPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);

  return (
    <PageWrapper className={cx("ArticleEditPage")} dataTestid="ArticleEditPage">
      {isEdit ? `Редактирование ${id}` : "Создание"}
    </PageWrapper>
  );
}

export default ArticleEditPage;
