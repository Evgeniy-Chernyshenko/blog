import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper";

export function HomePage() {
  const { t } = useTranslation("main");

  return (
    <PageWrapper>
      <h1>{t("Главная страница")}</h1>
    </PageWrapper>
  );
}

export default HomePage;
