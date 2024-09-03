import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper";
import { Counter } from "@/entities/Counter";

export function HomePage() {
  const { t } = useTranslation("main");

  return (
    <PageWrapper dataTestid="HomePage">
      <h1>{t("Главная страница")}</h1>
      <Counter />
    </PageWrapper>
  );
}

export default HomePage;
