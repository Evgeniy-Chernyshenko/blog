import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper";

function AdminPanelPage() {
  const { t } = useTranslation("admin");

  return (
    <PageWrapper dataTestid="AdminPanelPage">
      <h1>{t("Панель администратора")}</h1>
    </PageWrapper>
  );
}

export default AdminPanelPage;
