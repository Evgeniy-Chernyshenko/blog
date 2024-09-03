import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper";
import { TextBlock } from "@/shared/ui/TextBlock";

function ForbiddenPage() {
  const { t } = useTranslation("forbidden");

  return (
    <PageWrapper dataTestid="ForbiddenPage">
      <TextBlock
        title={t("У вас нет прав для доступа к этой странице")}
        theme="error"
      />
    </PageWrapper>
  );
}

export default ForbiddenPage;
